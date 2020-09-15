import React, {useCallback, useState} from 'react';
//https://numb86-tech.hatenablog.com/entry/2019/12/20/222412 参考

interface Props {
    value:number;
    onClick: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const App = () => {

    const [state, setState] = useState({
        app: 0,
        child: 0,
    });

    const countUpApp = () => {
        setState(s => ({
            app: s.app + 1,
            child: s.child,
        }));
    };

    const countUpChild = () => {
        setState(s => ({
            app: s.app,
            child: s.child + 1,
        }));
    };

    const alertChildState = useCallback(() => {
        alert(state.child);
    }, [state.child]);

    console.log('render App');

    return (
        <div>
            <button type="button" onClick={countUpApp}>
                count up app
            </button>
            <br />
            <button type="button" onClick={countUpChild}>
                count up child
            </button>
            <br />
            App: {state.app}
            <Child value={state.child} onClick={alertChildState} />
        </div>
    );
};

const Child = React.memo(({value, onClick}:Props) => {
    console.log('render Child');

    return (
        <div>
            Child: {value}
            <br />
            <button type="button" onClick={onClick}>
                click
            </button>
        </div>
    );
});

export default App;