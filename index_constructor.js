import React from 'react';

class App extends React.Component {
		constructor() {
        super();
        this.sate = {
            count: 0
        };
    }
// también pueden o no llevar estado
    render() {
        return (
            <div>
                <h1>Hello world! </h1>
            </div>
        )
    }
}