import clsx from 'clsx';
import React from 'react';

import styles from './index.module.scss';

export default function CallToAction(props) {
  return (
    <div {...props} className={clsx(props.className, 'call-to-action', styles.callToAction)}>
      <div className="heading-group">
        <header>{props.title}</header>
        <p>
        {props.description}
        </p>
      </div>
      <div>
        <a href={props.link} target="_blank" className="call-to-action-button">
        {props.button_title} <ion-icon name="arrow-forward-outline" />
        </a>
      </div>
    </div>
  );
}
