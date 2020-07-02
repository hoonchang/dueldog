const style = document.createElement('style')
document.head.appendChild(style)

const headerDot = document.querySelector('.day-header-bg')
const headerDotClasses = ['pink', 'purple', 'blue', 'red', 'green']

const headerCloseBtn = document.querySelector('.day-header-close')

const dayContainer = document.querySelector('.app-day-container')
const dayHeaderTitleDay = document.querySelector('.day-header-title-day')
const dayHeaderContent = document.querySelector('.day-header-content')
const dayHeaderEvent = document.querySelector('.day-header-event')
const dayContent = document.querySelector('.day-content')
const dayHeader = document.querySelector('.day-header')

dayContent.addEventListener('scroll', _ => {
  if (_.target.scrollTop > 155) {
    if (dayHeader.classList.contains('day-header--large')) {
      dayHeader.classList.remove('day-header--large')
      dayHeader.classList.add('sticky')
      dayHeader.style.height = `${46}px`
    }
  } else if (_.target.scrollTop < 155) {
    if (!dayHeader.classList.contains('day-header--large')) {
      dayHeader.classList.add('day-header--large')
      dayHeader.classList.remove('sticky')
      dayHeader.style.height = `${200}px`
    }
    dayHeader.style.height = `${200 - _.target.scrollTop}px`
  }
})

headerCloseBtn.addEventListener('click', _ => {
  dayContainer.classList.add('animate-out')

  setTimeout(() => {
    dayContainer.classList.add('hidden')
    dayContainer.classList.remove('animate-out')
    dayHeaderContent.classList.remove('animate-in')
    dayContent.classList.remove('animate-in')
    dayHeader.classList.add('day-header--large')
    dayHeader.classList.remove('sticky')
    dayContent.scrollTop = 0
    headerCloseBtn.classList.remove('animate')
    headerDot.classList.remove('animate')
      headerDotClasses.forEach(c => {
      headerDot.classList.remove(c)
    })
    style.innerHTML = ''
  }, 155)
})

Array.from(document.querySelectorAll('[data-day]'))
  .forEach(day => {
    const selector =
          `.app .app-calendar .calendar-row .day.event[data-day="${day.dataset.day}"]:before`
    const colorClass = headerDotClasses.filter(c => {
      return day.classList.contains(c)
    })[0]


    day.addEventListener('click', _ => {
      const animate = _.target.classList.contains('animate')
      dayContainer.classList.remove('hidden')
      headerDot.classList.remove('animate')
      headerDotClasses.forEach(c => {
        headerDot.classList.remove(c)
      })

      dayHeaderTitleDay.innerText = day.dataset.day
      dayHeaderEvent.innerText = day.dataset.event

      if (!animate) {
        style.innerHTML =
          `${selector} {
            top: ${_.target.offsetTop}px;
            left: ${_.target.offsetLeft}px;
          }`
      } else {
        style.innerHTML = ''
      }
      _.target.classList.add('animate')

      // Just above the bottom of the header
      // Math done from the vars in the stylus
      const endPos = { x: 55, y: 166 }

      style.innerHTML =
        `${selector} {
            top: ${_.target.offsetTop}px;
            left: ${_.target.offsetLeft}px;
          }
         ${selector} {
            transform: translate(
              ${String(endPos.x - _.target.offsetLeft) + 'px'},
              ${String(endPos.y - _.target.offsetTop) + 'px'}
            )
        }`

      setTimeout(() => {
        _.target.classList.remove('animate')
        headerDot.classList.add(colorClass)
        headerDot.classList.add('animate')
        dayContent.classList.add('animate-in')

        setTimeout(() => {
          headerCloseBtn.classList.add('animate')
          dayHeaderContent.classList.add('animate-in')
        }, 150)
      }, 150)
    })
})
