
  //<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  

    $(document).ready(() => {
      $('.popup').hide()
      $('.threesixty-text').show()
    })
    
    function popupClick(slice) {
      if(slice == 'operations') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('operations')
      $('.popup_subtext').text('Maximize supply chain efficiency from warehouse receiving to shipping and trucking.')
      $('.popup_btn a').html('Learn More').attr('href', '/contact')
      }
      else if(slice == 'technology') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('technology')
      $('.popup_subtext').text('Bringing the right technology partners and solutions to drive your business.')
      $('.popup_btn a').html('Learn More').attr('href', '/technology')
      }
      else if(slice == 'marketing') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('marketing')
      $('.popup_subtext').text('Build brand awareness and maximize supplier marketing programs.')
      $('.popup_btn a').html('Learn More').attr('href', '/contact')
      }
      else if(slice == 'purchasing') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('purchasing')
      $('.popup_subtext').text('Establish best practices in procurement from suppliers that reduce costs of goods.')
      $('.popup_btn a').html('Learn More').attr('href', '/purchasing')
      }
      else if(slice == 'resourcelibrary') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('resource library')
      $('.popup_subtext').text('Access information on industry best practices via a single online source.')
      $('.popup_btn a').html('Learn More').attr('href', '/contact')
      }
      else if(slice == 'sales') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('sales')
      $('.popup_subtext').text('Strategies and tools to drive your topline growth.')
      $('.popup_btn a').html('Learn More').attr('href', '/contact')
      }
      else if(slice == 'peopleplanning') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('people and planning')
      $('.popup_subtext').text('Focus your strategies, develop your leadership, grow your business.')
      $('.popup_btn a').html('Learn More').attr('href', '/people-and-planning')
      }
      else if(slice == 'finance') {
      $('.popup').show()
      $('.threesixty-text').hide()
      $('.popup_head').text('finance')
      $('.popup_subtext').text('Manage cash flow and improve your bottom line.')
      $('.popup_btn a').html('Learn More').attr('href', '/contact')
      }
      else if(slice == 'unsel') {
      $('.popup').hide()
      $('.popup_head').text('')
      $('.popup_subtext').text('')
      $('.threesixty-text').show()
      }
    }
    
    function popupClose() {
      $('.popup').hide()
      $('.menuopt').prop('checked', false)
      $('.threesixty-text').show()
    }
  

  