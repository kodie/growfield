/*!
  growfield v0.0.1 (https://growfield.js.org)
  by Kodie Grantham (https://kodieg.com)
*/

const growfield = (selector, options) => {
  if (!selector) selector = '.growfield'

  options = Object.assign({}, growfield.defaultOptions, options)

  let elements

  if (typeof selector === 'string') {
    elements = document.querySelectorAll(selector)
  } else if (selector instanceof HTMLElement) {
    elements = [elements]
  }

  if (elements && elements.length) {
    for (let i = 0; i < elements.length; i++) {
      (function (element) {
        element.style.setProperty('height', 'auto')
        element.style.setProperty('max-height', 'none')
        element.style.setProperty('min-height', 'none')
        element.style.setProperty('resize', 'none')

        element.growfield = options

        element.addEventListener('input', growfield.onInput)
        element.dispatchEvent(new Event('input', { bubbles: true }))
      })(elements[i])
    }
  }

  if (elements.length) {
    if (elements.length === 1) {
      return elements[0]
    }

    return elements
  }

  return false
}

growfield.defaultOptions = {
  maxRows: null,
  minRows: null
}

growfield.onInput = (e) => {
  const element = e.currentTarget
  const opts = element.growfield

  element.setAttribute('rows', '1')

  const style = getComputedStyle(element)
  const blockPadding = (parseFloat(style['padding-top']) + parseFloat(style['padding-bottom']))
  const inlinePadding = (parseFloat(style['padding-left']) + parseFloat(style['padding-right']))
  const inlineBorderWidth = (parseFloat(style['border-left-width']) + parseFloat(style['border-right-width']))

  element.style.setProperty('overflow', 'hidden', 'important')

  const width = (parseFloat(style.width) - inlinePadding - inlineBorderWidth)

  element.style.setProperty('border-width', '0')
  element.style.setProperty('box-sizing', 'content-box')
  element.style.setProperty('padding-inline', '0')
  element.style.setProperty('width', String(width) + 'px')

  const lineHeight = style['line-height'] === 'normal' ? parseFloat(style.height) : parseFloat(style['line-height'])
  const scrollHeight = Math.round(element.scrollHeight)

  element.style.removeProperty('border-width')
  element.style.removeProperty('box-sizing')
  element.style.removeProperty('overflow')
  element.style.removeProperty('padding-inline')
  element.style.removeProperty('width')

  let rows = Math.max(opts.minRows || 1, Math.round((scrollHeight - blockPadding) / lineHeight))

  if (opts.maxRows) {
    rows = Math.min(rows, opts.maxRows)
  }

  element.setAttribute('rows', String(rows))
}

export default growfield
