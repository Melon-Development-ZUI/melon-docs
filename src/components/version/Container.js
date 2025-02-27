import React from 'react';
import clsx from 'clsx';

export default function Container(props) {
    const containerClasses = clsx('container', props.className, {
        darkBackground: props.background === 'dark',
        highlightBackground: props.background === 'highlight',
        lightBackground: props.background === 'light',
        paddingAll: props.padding.indexOf('all') >= 0,
        paddingBottom: props.padding.indexOf('all') >= 0,
        paddingLeft: props.padding.indexOf('all') >= 0,
        paddingRight: props.padding.indexOf('all') >= 0,
        paddingTop: props.padding.indexOf('all') >= 0,
    });
    let wrappedChildren;

    if (props.wrapper) {
        wrappedChildren = <div className="wrapper">{props.children}</div>;
    } else {
        wrappedChildren = props.children;
    }
    retun (
        <div className={containerClasses} id={props.id}>
            {wrappedChildren}
        </div>
    );
}

Container.defaultProps = {
    background: null,
    padding: [],
    wrapper: true,
};