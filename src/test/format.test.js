import format, {
  formattingTag, removeAutoclosedTags, removeCommentTags, removeCommonFooter, transformToJSX,
} from '../helpers/formatHtml';
import alg1 from '../data/algoritmos/alg1';
import alg2 from '../data/algoritmos/alg2';
import alg3 from '../data/algoritmos/alg3';

describe('formattingTag Test', () => {
  test('Empty String return null', () => {
    const result = formattingTag('');
    expect(result).toBe(null);
  });
  test('No tag return null', () => {
    const result = formattingTag('Esto no es un tag');
    expect(result).toBe(null);
  });

  test('Simple tag return content as child field', () => {
    const content = 'this is a normal content';
    const type = 'typeOfTag';
    const section = `<${type}>${content}</${type}>`;
    const result = formattingTag(section);
    expect(result).toEqual({ type, children: [{ content }] });
  });

  test('Composed tag return content of tag', () => {
    const section = 'this text <p>content</p> more text';
    const result = formattingTag(section);
    expect(result).toEqual({ type: 'p', children: [{ content: 'content' }] });
  });

  test('Tag with children tags', () => {
    const content = 'this text contain <type2>A child</type2> wow';
    const section = `<type1>${content}</type1>`;
    const result = formattingTag(section);
    expect(result.type).toBe('type1');
    expect(result.children).toEqual([
      { content: 'this text contain ' },
      { type: 'type2', children: [{ content: 'A child' }] },
      { content: ' wow' },
    ]);
  });
});

describe('Advanced Tests', () => {
  test('Tag with varius children tags', () => {
    const section = '<p>a text <h1>title</h1>more text <strong>stronger<h1>TEXT</h1></strong></p>';
    const result = formattingTag(section);
    // console.log(result.children);
    expect(result.children).toEqual([
      { content: 'a text ' },
      { type: 'h1', children: [{ content: 'title' }] },
      { content: 'more text ' },
      {
        type: 'strong',
        children: [
          { content: 'stronger' },
          { type: 'h1', children: [{ content: 'TEXT' }] },
        ],
      },
    ]);
  });

  test('Tag with nested same types', () => {
    const section = '<p>a text <p>and another text</p></p>';
    const result = formattingTag(section);
    expect(result.children).toEqual([
      { content: 'a text ' },
      { type: 'p', children: [{ content: 'and another text' }] },
    ]);
  });
});

describe('format test', () => {
  test('HTML file', () => {
    const html = '<p>a text <h1>title</h1>more text</p><p>more more text</p>';
    const result = format(html);
    expect(result).toEqual({
      type: 'html',
      children: [
        { content: '' },
        {
          type: 'p',
          children: [
            { content: 'a text ' },
            { type: 'h1', children: [{ content: 'title' }] },
            { content: 'more text' },
          ],
        },
        { content: '' },
        {
          type: 'p',
          children: [
            { content: 'more more text' },
          ],
        },
      ],
    });
  });
});

describe('formal test', () => {
  test('remove comments test', () => {
    const content = 'asdfghjkl<!-- wpdasda --> esto sigue';
    const result = removeCommentTags(content);
    expect(result).toBe('asdfghjkl esto sigue');
  });

  test('remove common footer', () => {
    // console.log(removeCommonFooter(alg2));
  });

  test('HTML Doc', () => {
    const noFooter = removeCommonFooter(alg2);
    const noComment = removeCommentTags(noFooter);
    const result = format(noComment);
    // console.log(result);
  });

  test('Problem alg', () => {
    const noFooter = removeCommonFooter(alg3);
    // console.log(noFooter);
    const noComment = removeCommentTags(noFooter);
    // console.log(noComment);
    const noAutoTags = removeAutoclosedTags(noComment);
    // console.log(noAutoTags);
    const htmls = transformToJSX(noAutoTags);
    const result = formattingTag(htmls);
    // console.log(result);
  });
});
