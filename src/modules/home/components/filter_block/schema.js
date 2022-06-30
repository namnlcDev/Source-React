import * as yup from 'yup'

export const FilterBlockSchema = () =>
  yup.object().shape({
    collection_name__OR__description: yup
      .string()
      .trim()
      .required('Please type something')
  })
