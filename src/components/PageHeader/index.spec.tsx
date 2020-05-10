import React from 'react';
import { render } from '@testing-library/react';

import PageHeader from '.';

describe('<PageHeader />', () => {
    test('It renders h1 element', () => {
        const { container } = render(<PageHeader />);

        expect(container.querySelector('h1')).toBeInTheDocument();
    });

    test('It renders given children as PageHeader content', () => {
        const text = 'Hello World!';
        const { getByText } = render(<PageHeader>{text}</PageHeader>);

        expect(getByText(text)).toBeInTheDocument();
    });
});
