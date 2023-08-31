import { render, screen } from '@testing-library/react-native'
import { ColorPick } from '.'

// Uma das maiores dificuldades nesse ponto foi entender o que precisa ser testado exatamente
// pra mim não faz muito sentido testar apenas se o componente tá sendo renderizado na tela

describe('#ColorPick Component', () => {
  const data = ['red', 'blue', 'yellow']
  it('should render a color pick component', ()=> {
    render(<ColorPick colors={data}/>)

    const colorPick = screen.findByTestId('colors')
    expect(colorPick).toBeTruthy()
  })
})