import { FormContainer, Input, Icon, Button, Label, Text } from './styles/form'

const Form = ({ children, ...restProps }) => (
  <FormContainer {...restProps}>{children}</FormContainer>
)

Form.Input = ({ ...restProps }) => <Input {...restProps} />

Form.Label = ({ children, ...restProps }) => (
  <Label {...restProps}>{children}</Label>
)

Form.Icon = ({ ...restProps }) => <Icon {...restProps} />
Form.Button = ({ children, ...restProps }) => (
  <Button {...restProps}>{children}</Button>
)
Form.Text = ({ children, ...restProps }) => (
  <Text {...restProps}>{children}</Text>
)

export default Form
