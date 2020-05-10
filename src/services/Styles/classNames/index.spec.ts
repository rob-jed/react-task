import classNames from '.';

describe('Styles => classNames', () => {
    it('concatenates strings', () => {
        expect(classNames('btn', 'btn--active', 'btn--loading')).toEqual(
            'btn btn--active btn--loading'
        );
    });

    it('filters falsy values', () => {
        expect(
            classNames(
                'btn',
                false && 'btn--active',
                true && 'btn--loading',
                undefined
            )
        ).toEqual('btn btn--loading');
    });
});
