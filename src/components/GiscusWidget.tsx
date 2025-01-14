import * as React from 'react';
export default function GiscusWidget( ): JSX.Element {
    React.useEffect(() => {
        // Check if the script already exists
        // if (document.querySelector('script[src="https://giscus.app/client.js"]')) {
        //     return;
        // }

        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.async = true;
        script.setAttribute('data-repo', "agentico/website");
        script.setAttribute('data-repo-id', "R_kgDOMJ0YAw");
        script.setAttribute('data-category', "General");
        script.setAttribute('data-category-id', "DIC_kwDOMJ0YA84CkJYb");
        script.setAttribute('data-mapping', "pathname");
        script.setAttribute('data-strict', "0");
        script.setAttribute('data-reactions-enabled', "1");
        script.setAttribute('data-emit-metadata', "0");
        script.setAttribute('data-input-position', "bottom");
        script.setAttribute('data-theme', "light"); //"preferred_color_scheme");
        script.setAttribute('data-lang', "en");
        script.setAttribute('data-loading', "lazy");
        script.crossOrigin = "anonymous";
    
        document.body.appendChild(script);

        return () => {
          // clean up the script tag that we added when the component is unmounted
          document.body.removeChild(script);
        }
      }, []);
    
      
    return (
        <>
            <div class="giscus" id="giscus"></div>
        </>
    );
}
