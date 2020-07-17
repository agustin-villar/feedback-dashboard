import {
    getPlatform,
    filterDataByValues,
    filterDataByComment,
    getUniqueFilterValues,
} from '.';

describe('getPlatform: should return desktop or mobile accordingly', () => {
    // Desktop platforms
    ['WinVista', 'Win7', 'Win8.1', 'WinXP', 'MacOSX'].forEach(platform => {
        test(platform, () => {
            expect(getPlatform(platform)).toBe('Desktop');
        });
    });

    // Mobile platforms
    ['Android', 'iOS'].forEach(platform => {
        test(platform, () => {
            expect(getPlatform(platform)).toBe('Mobile');
        });
    });
});

describe('filterDataByValues: should filter object arrays, according to a set of values', () => {
    const values = [
        { foo: 'filter-a' },
        { foo: 'filter-b' },
        { foo: 'filter-c' },
    ];

    test('should return an array excluding objects mathcing the selected values', () => {
        expect(filterDataByValues(['filter-a'], 'foo', values))
            .toStrictEqual([{ foo: 'filter-b' }, { foo: 'filter-c' }]);

        expect(filterDataByValues(['filter-b', 'filter-c'], 'foo', values))
            .toStrictEqual([{ foo: 'filter-a' }]);

        expect(filterDataByValues(['filter-b', 'filter-c', 'filter-a'], 'foo', values))
            .toStrictEqual([]);
    });

    test('shold return the original array if no filters are specified', () => {
        expect(filterDataByValues([], 'foo', values))
            .toStrictEqual(values);
    });
});

describe('filterDataByComment: should filter an array of objects whose comment attribute match a given string', () => {
    const values = [
        { comment: 'Pie candy canes donut lollipop' },
        { comment: 'Powder sesame snaps gummies' },
        { comment: 'Sugar plum sesame snaps' },
    ];

    test('should return an array with objects that contain a string in their comment property', () => {
        expect(filterDataByComment('sesame', values)).toStrictEqual([
            { comment: 'Powder sesame snaps gummies' },
            { comment: 'Sugar plum sesame snaps' },
        ]);

        expect(filterDataByComment(' ', values)).toStrictEqual([
            { comment: 'Pie candy canes donut lollipop' },
            { comment: 'Powder sesame snaps gummies' },
            { comment: 'Sugar plum sesame snaps' },
        ]);

        expect(filterDataByComment('Pie', values)).toStrictEqual([
            { comment: 'Pie candy canes donut lollipop' },
        ]);
    });

    test('matching should not be case sensitive', () => {
        expect(filterDataByComment('CaNdY', values)).toStrictEqual([
            { comment: 'Pie candy canes donut lollipop' },
        ]);
    });

    test('An empty string should not filter results', () => {
        expect(filterDataByComment('', values)).toStrictEqual(values);
    });
});

describe('getUniqueFilterValues: should add or remove values to a set keeping them unique', () => {
    const values = [1, 2, 3, 4];

    test('should add a value to the array if is not present in it', () => {
        expect(getUniqueFilterValues(values, 5)).toStrictEqual([1, 2, 3, 4, 5]);
    });

    test('should remove a value from the array if an equal value is already there', () => {
        expect(getUniqueFilterValues(values, 4)).toStrictEqual([1, 2, 3]);
    });
});
