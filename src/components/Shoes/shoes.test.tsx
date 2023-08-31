import { render, screen } from '@testing-library/react-native'
import { Shoes } from '.'

describe('#Header Component', () => {
  it('should render a header component', ()=> {
    render(<Shoes 
      image='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' 
      price={230}
    > Sapatato novo! Que beleza!</Shoes>)

    const productTitle = screen.getByTestId('product-title')
    expect(productTitle).toBeTruthy()
  })
})