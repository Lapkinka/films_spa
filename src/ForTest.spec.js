import React from 'react'
import { shallow } from 'enzyme'
import ForTest from './app/components/ForTest'


describe('ForTest container', () => { // групируем с помощью describe все тесты для контейнера News

  describe('ForTest container initial', () => { // группируем еще на один уровень, так как здесь потом будет тест componentDidMount
    it('render_1 tag p', () => {
      const newsContainer_1 = shallow(<ForTest text = "123" />)
      // expect(newsContainer_1.find("p")).toHaveLength(1)
      expect(newsContainer_1).toMatchSnapshot()
    })

    it('render_2 text in "p"', () => {
      const newsContainer_1 = shallow(<ForTest text = "123" />)
      // expect(newsContainer_1.find("p").text()).toEqual("For_Test_text123")
      expect(newsContainer_1).toMatchSnapshot()
    })

    it('render_3 InlineSvg', () => {
      const newsContainer_2 = shallow(<ForTest text = "" />)
      // expect(newsContainer_2.find("InlineSvg")).toHaveLength(0)
      expect(newsContainer_2).toMatchSnapshot()
    })
  })
})