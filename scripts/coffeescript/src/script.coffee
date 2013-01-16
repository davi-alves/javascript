class JangaSlideshow
  @totalSlides = 0
  @slideInterval = null
  constructor: ->
    $('.change-slide:first').addClass 'slide-current'
    @countSlides()
    @bindNavClick()
    @bindMouseEvents()
    @slideInterval = setInterval(
      =>
        @autoMoveSlides()
      5000
    )

  countSlides: ->
    i = 0
    $('.change-slide').each ->
      i += 1
    @totalSlides = i

  changeSlide: (index) ->
    $('#slide-frame').animate top: "#{65 * index}px", 500
    $('.slides').animate top: "-#{260 * index}px", 500
    @

  autoMoveSlides: ->
    clearInterval(@slideInterval) if @totalSlides <= 1
    element = $('.slide-current').parents '.nav-item'
    clearInterval(@slideInterval) unless element?
    nextElement = $(element).next()
    index = $(element).next().children('.change-slide').attr 'rel'
    unless index?
      nextElement = $ '.nav-item:first'
      index = 0
    $('.change-slide').removeClass 'slide-current'
    ;
    $(nextElement).children('.change-slide').addClass 'slide-current'
    ;
    @changeSlide index

  bindNavClick: ->
    $('.change-slide').on 'click', (event)=>
      event.preventDefault()
      $('.change-slide').removeClass 'slide-current'
      $(@).parent().addClass 'slide-current'

      index = $(event.target).parent().attr 'rel'
      @changeSlide index
    @

  bindMouseEvents: ->
    $('.wgt-slideshow').on
      mouseenter: =>
        clearInterval @slideInterval
      mouseleave: =>
        @slideInterval = setInterval(
          =>
            @autoMoveSlides()
          5000
        )
    @
$(
  ->
    slideShow = new JangaSlideshow()

)
