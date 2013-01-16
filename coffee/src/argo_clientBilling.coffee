Index = ((Index) ->
  Index.clientBilling = ( ->
    __listBillingsUrl = '/historico/ClienteFaturamento/listar/{month}/{year}'
    __monthElement = ''
    __yearElement = ''
    __tableElement = ''

    loadData = ->
      month = $(__monthElement).val()
      url = __listBillingsUrl.replace '{month}', month

      year = $(__yearElement).val()
      url = url.replace '{year}', year
      console.log 'url de consulta: ' + url

      $.ajax(
        type: 'GET'
        dataType: 'json'
        url: url
        success: renderHtml
      )

    bindElements = ->
      console.log 'Aplicando binds'
      $(__monthElement).bind 'change', loadData
      $(__yearElement).bind 'change', loadData
      true

    renderHtml = (data) ->
      console.log 'Criando html'

    {
    clientBilling:
      init: (monthElement, yearElement, tableElement) ->
        console.log 'Iniciando'
        __monthElement = monthElement
        __yearElement = yearElement
        __tableElement = tableElement
        console.log __monthElement + ', ' + __yearElement + ', ' + __tableElement
        if $(__monthElement).length is 0 or $(__yearElement).length is 0 or $(__tableElement).length is 0
          throw new Error 'Elementos incorretos'
          return false
        bindElements()
        loadData()
    }

  )()

)(Index || {})
