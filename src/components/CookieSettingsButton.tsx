import React from 'react';
import Button from '@mui/joy/Button';

export default function CookieSettingsButton(): JSX.Element {
  const handleClick = () => {
    var _hsp = window._hsp = window._hsp || [];
    _hsp.push(['showBanner']);
  };
  // @fixme - should be displayed only if the cookie banner is not visible
  return (
    <Button
      style={{
        backgroundColor: '#06abcd',
        border: '1px solid #06abcd',
        borderRadius: '3px',
        padding: '10px 16px',
        textDecoration: 'none',
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        fontWeight: 'normal',
        lineHeight: 'inherit',
        textAlign: 'left',
        textShadow: 'none',
      }}
      onClick={handleClick}
    >
      Cookie Settings
    </Button>
  );
}

/* original code:
<!-- Start of HubSpot code snippet -->
<button type="button" id="hs_show_banner_button"
style="background-color: #06abcd; border: 1px solid #06abcd;
       border-radius: 3px; padding: 10px 16px; text-decoration: none; color: #fff;
       font-family: inherit; font-size: inherit; font-weight: normal; line-height: inherit;
       text-align: left; text-shadow: none;"
onClick="(function(){
  var _hsp = window._hsp = window._hsp || [];
  _hsp.push(['showBanner']);
})()"
>
Cookie Settings
</button>

<!-- End of HubSpot code snippet -->
*/