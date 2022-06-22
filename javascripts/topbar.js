$(function() {
    prettyPrint()
    function resetToDefaults() {
      topbar.config({
        autoRun      : true,
        barThickness : 3,
        barColors    : {
          '0'      : 'rgba(47, 115, 176, .9)',
          '.25'    : 'rgba(47, 115, 176, .9)',
          '.50'    : 'rgba(47, 115, 176, .9)',
          '.75'    : 'rgba(47, 115, 176, .9)',
          '1.0'    : 'rgba(47, 115, 176, .9)'
        },
        shadowBlur   : 10,
        shadowColor  : 'rgba(0,   0,   0,   .6)',
        className    : 'topbar'
      })
    }

    // Page load
    resetToDefaults()
    topbar.show()
    setTimeout(function() {
      $('#main_content').fadeIn('slow')
      topbar.hide()
    }, 1500)

    // Simple Demo
    $('#btnStartSimple').click(function() {
      resetToDefaults()
      topbar.show()
    })
    $('#btnStopSimple').click(function() {
      topbar.hide()  
    })

    // Advanced Demo
    $('#btnStartAdvanced').click(function() {
      resetToDefaults()
      topbar.config({
        autoRun      : false, 
        barThickness : 3,
        barColors    : {
            '0'      : 'rgba(26,  188, 156, .7)',
            '.3'     : 'rgba(41,  128, 185, .7)',
            '1.0'    : 'rgba(231, 76,  60,  .7)'
        },
        shadowBlur   : 5,
        shadowColor  : 'rgba(0, 0, 0, .5)'
      })
      topbar.show();
      (function step() {
        setTimeout(function() {  
          if (topbar.progress('+.01') < 1) step()
        }, 16)
      })()
    })
    $('#btnStopAdvanced').click(function() {
      topbar.hide()  
    })
})