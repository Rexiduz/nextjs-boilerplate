import { useBreakpoint } from '@Client/core/hooks'
import { createElement, useMemo } from 'react'

const MockView = () => <div>Mock View</div>

const withResourceByBreakpoint = (mapper = {}) => (props) => {
  const HoC = (props) => {
    const bp = useBreakpoint()

    const component = useMemo(() => {
      const sizeOfScreen = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl']
      const activeBreakpoint = Object.values(bp)

      const viewIndex = activeBreakpoint.lastIndexOf(true)
      const breakpoint = sizeOfScreen[viewIndex]

      if (breakpoint in mapper) {
        return mapper[breakpoint]
      }

      const mapperOrderByWeight = sizeOfScreen.map((bp) => mapper[bp])

      const cloneMapperOrderByWeight = [...mapperOrderByWeight]

      const sliced = cloneMapperOrderByWeight.splice(
        viewIndex,
        mapperOrderByWeight.length
      )

      const isResultChoiceEmpty = sliced.every((i) => typeof i === 'undefined')

      if (isResultChoiceEmpty) {
        cloneMapperOrderByWeight.reverse()

        const matchViewIndex = cloneMapperOrderByWeight.findIndex(
          (item) => typeof item !== 'undefined'
        )

        const matchView = cloneMapperOrderByWeight[matchViewIndex]

        return matchView || MockView
      }

      const leftView = sliced.find((i) => typeof i !== 'undefined')

      return leftView || MockView
    }, [mapper, bp])

    return createElement(component, props)
  }

  return createElement(HoC, props)
}

export default withResourceByBreakpoint
