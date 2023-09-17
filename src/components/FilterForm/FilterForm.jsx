import React from 'react';
import { useDispatch } from 'react-redux';
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
  StyledSpanFrom,
  StyledSpanTo,
} from './FilterForm.styled';
import { generatePriceRange } from 'helpers';
import brandList from '../../lists/makes.json';
import { fetchAdverts } from 'redux/operations';
import { isShowMore } from 'redux/slice';

const FilterForm = () => {
  const priceList = generatePriceRange(20, 500);
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    carBrand: Yup.string(),
    from: Yup.string().test(
      'from-to-validation',
      'From must be less than To',
      function (value) {
        const { to } = this.parent;
        if (value === '' || to === '') {
          return true;
        }

        const fromNumbered = parseFloat(value?.replace(/[^0-9]/g, ''));
        const toNumbered = parseFloat(to?.replace(/[^0-9]/g, ''));

        if (!isNaN(fromNumbered) && !isNaN(toNumbered)) {
          if (fromNumbered >= toNumbered) {
            Notify.failure(`From field must be less than To field`);
            return false;
          }
        }

        return true;
      }
    ),
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
      dispatch(isShowMore(false));
      dispatch(
        fetchAdverts({
          carBrand: values.carBrand,
          price: values.price,
        })
      );
      Notify.success(`Filters successfully applied`);
    },
  });

  const handleSpanClick = id => {
    const spanClicked = document.getElementById(id);
    if (spanClicked) {
      spanClicked.focus();
    }
  };

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <SelectorWrapper>
        <FormLabel htmlFor="carBrand">Car brand</FormLabel>
        <div className="dropdown-wrapper dropdown-wrapper-brand">
          <Dropdown
            placeholder="Enter the text"
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
            value={formik.values.price}
            key={formik.values.price}
            options={priceList}
            onChange={selectedOption =>
              formik.setFieldValue('price', selectedOption.value)
            }
          />
        </div>
      </SelectorWrapper>

      <SelectorWrapper>
        <FormLabel htmlFor="mileage">Car mileage / km:</FormLabel>
        <MileageWrapper>
          <StyledSpanFrom onClick={() => handleSpanClick('from')}>
            From
          </StyledSpanFrom>
          <InputFromStyled
            type="text"
            id="from"
            name="from"
            onChange={e => {
              const { name, value } = e.target;
              let numericValue = parseFloat(value.replace(/[^0-9]/g, ''));
              if (value === '') {
                numericValue = '';
              }

              if (numericValue === '' || !isNaN(numericValue)) {
                const formattedValue =
                  numericValue === '' ? '' : numericValue.toLocaleString();
                formik.handleChange({
                  ...e,
                  target: { name, value: formattedValue },
                });
              } else {
                formik.setFieldValue(name, formik.values[name] || '');
              }
            }}
            onBlur={formik.handleBlur}
            value={
              formik.values.from.toLocaleString() === ''
                ? ''
                : formik.values.from.toLocaleString()
            }
          />

          <StyledSpanTo onClick={() => handleSpanClick('to')}>To</StyledSpanTo>
          <InputToStyled
            type="text"
            id="to"
            name="to"
            onChange={e => {
              const { name, value } = e.target;
              let numericValue = parseFloat(value.replace(/[^0-9]/g, ''));
              if (value === '') {
                numericValue = '';
              }

              if (numericValue === '' || !isNaN(numericValue)) {
                const formattedValue =
                  numericValue === '' ? '' : numericValue.toLocaleString();
                formik.handleChange({
                  ...e,
                  target: { name, value: formattedValue },
                });
              } else {
                formik.setFieldValue(name, formik.values[name] || '');
              }
            }}
            onBlur={formik.handleBlur}
            value={
              formik.values.to.toLocaleString() === ''
                ? ''
                : formik.values.to.toLocaleString()
            }
          />
        </MileageWrapper>
      </SelectorWrapper>

      <ButtonStyled type="submit">Search</ButtonStyled>
    </FormStyled>
  );
};

export default FilterForm;
