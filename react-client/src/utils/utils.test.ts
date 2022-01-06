
import {
    findMatchedTerm,
    highlightMatchedTerm,
} from './utils';

test('Return empty bold tag', () => {
    expect(highlightMatchedTerm('')).toBe(`<b style=\"color:tomato;\"></b>`);
});

test('Highlight matched term', () => {
    expect(highlightMatchedTerm('foo')).toBe(`<b style=\"color:tomato;\">foo</b>`);
});

test('Return same string', () => {
    expect(findMatchedTerm('foo boo', '')).toBe(`foo boo`);
});

test('Highlight matched term', () => {
    expect(findMatchedTerm('foo boo', 'foo')).toBe(`<b style=\"color:tomato;\">foo</b> boo`);
});

test('Highlight matched term, irrespective of characters case', () => {
    expect(findMatchedTerm('foo boo', 'FOO')).toBe(`<b style=\"color:tomato;\">foo</b> boo`);
});
