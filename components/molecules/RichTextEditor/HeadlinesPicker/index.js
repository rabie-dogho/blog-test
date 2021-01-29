import React, { useEffect } from 'react';
import {
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
} from 'draft-js-buttons';


const HeadlinesPicker = ({ onOverrideContent, ...props }) => {

    const onWindowClick = () =>
        // Call `onOverrideContent` again with `undefined`
        // so the toolbar can show its regular content again.
        onOverrideContent(undefined);
    useEffect(() => {
        setTimeout(() => { window.addEventListener('click', onWindowClick); });
        return () => {
            window.removeEventListener('click', onWindowClick);
        }
    }, [])

    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
        <>
            {buttons.map((Button, i) => // eslint-disable-next-line
                <Button key={i} {...props} />
            )}
        </>
    );
}

export default HeadlinesPicker