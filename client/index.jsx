import * as React from 'react';
import * as ReactDOM from 'react-dom';

ReactDOM.render(
    <div>Hello World</div>,
    document.getElementById('client')
);

if (module.hot) {
    module.hot.accept();
}