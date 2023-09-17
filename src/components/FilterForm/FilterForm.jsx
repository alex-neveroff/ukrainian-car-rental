import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Notify } from 'notiflix';
import {
  ButtonStyled,
  FormLabel,
  FormStyled,
  InputFromStyled,
  InputToStyled,
  MileageWrapper,
  SelectorWrapper,
  InputTextFrom,
  InputTextTo,
} from './FilterForm.styled';
import { selectBrands, selectPriceRange } from 'redux/selectors';
import { setFilter } from 'redux/slice';
import { addDollarSymbol, digitSeparator } from 'helpers';

const FilterForm = () => {
  const brandList = useSelector(selectBrands);
  const priceList = useSelector(selectPriceRange);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    carBrand: Yup.string(),
    from: Yup.string().test('from-to-validation', function (value) {
      const { to } = this.parent;
      if (value === '' || to === '') {
        return true;
      }

      let fromNumbered = parseFloat(value?.replace(/[^0-9]/g, ''));
      let toNumbered = parseFloat(to?.replace(/[^0-9]/g, ''));

      if (!isNaN(fromNumbered) && fromNumbered > 999999) {
        fromNumbered = 999999;
        formik.setFieldValue('from', digitSeparator(fromNumbered));
      }
      if (!isNaN(toNumbered) && toNumbered > 999999) {
        toNumbered = 999999;
        formik.setFieldValue('to', digitSeparator(toNumbered));
      }
      return true;
    }),
    to: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      carBrand: '',
      price: '',
      from: '',
      to: '',
    },
    validationSchema,
    onSubmit: values => {
      if (values.price === 'To $') {
        values.price = '';
      }

      if (!(values.from === '')) {
        const fromNumbered = parseFloat(
          typeof values.from === 'string'
            ? values.from.replace(/[^0-9]/g, '')
            : values.from
        );
        values.from = fromNumbered;
      }

      if (!(values.to === '')) {
        const toNumbered = parseFloat(
          typeof values.to === 'string'
            ? values.to.replace(/[^0-9]/g, '')
            : values.to
        );
        values.to = toNumbered;
      }

      if (!(values.from === '') && !(values.to === '')) {
        if (values.to < values.from) {
          Notify.failure(`From field must be less than To field`);
          return;
        }
      }
      dispatch(
        setFilter({
          carBrand: values.carBrand,
          price: values.price,
          from: values.from,
          to: values.to,
        })
      );
    },
  });

  const handleSpanClick = id => {
    const spanClicked = document.getElementById(id);
    if (spanClicked) {
      spanClicked.focus();
    }
  };

  const handleMileageRange = event => {
    const { name, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, '');

    formik.handleChange({
      ...event,
      target: { name, value: numericValue },
    });
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <SelectorWrapper>
        <FormLabel htmlFor="carBrand">Car brand</FormLabel>
        <div className="dropdown-wrapper dropdown-wrapper-brand">
          <Dropdown
            placeholder="Choose car brand"
            value={formik.values.carBrand}
            options={brandList}
            onChange={selectedOption =>
              formik.setFieldValue('carBrand', selectedOption.value)
            }
          />
        </div>
      </SelectorWrapper>

      <SelectorWrapper>
        <FormLabel htmlFor="price">Price/1 hour:</FormLabel>
        <div className="dropdown-wrapper">
          <Dropdown
            placeholder="To $"
            value={addDollarSymbol(formik.values.price)}
            key={formik.values.price}
            options={priceList}
            onChange={selectedOption => {
              formik.setFieldValue('price', selectedOption.value);
            }}
          />
        </div>
      </SelectorWrapper>

      <SelectorWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km:</FormLabel>
        <MileageWrapper>
          <InputTextFrom onClick={() => handleSpanClick('from')}>
            From
          </InputTextFrom>
          <InputFromStyled
            type="text"
            id="from"
            name="from"
            autocomplete="off"
            onChange={handleMileageRange}
            onBlur={formik.handleBlur}
            value={digitSeparator(formik.values.from)}
          />

          <InputTextTo onClick={() => handleSpanClick('to')}>To</InputTextTo>
          <InputToStyled
            type="text"
            id="to"
            name="to"
            autocomplete="off"
            onChange={handleMileageRange}
            onBlur={formik.handleBlur}
            value={digitSeparator(formik.values.to)}
          />
        </MileageWrapper>
      </SelectorWrapper>

      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

export default FilterForm;
