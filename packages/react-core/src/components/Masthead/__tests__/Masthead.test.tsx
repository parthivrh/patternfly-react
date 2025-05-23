import { render } from '@testing-library/react';
import { Masthead, MastheadMain, MastheadLogo, MastheadContent, MastheadBrand, MastheadToggle } from '../index';

describe('Masthead', () => {
  test('verify basic', () => {
    const { asFragment } = render(<Masthead>test</Masthead>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify full structure', () => {
    const { asFragment } = render(
      <Masthead>
        <MastheadMain>
          <MastheadToggle>Toggle</MastheadToggle>
          <MastheadBrand>
            <MastheadLogo>Logo</MastheadLogo>
          </MastheadBrand>
        </MastheadMain>
        <MastheadContent>
          <span>Content</span>
        </MastheadContent>
      </Masthead>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const { asFragment } = render(<Masthead className="custom-css">test</Masthead>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify inline display breakpoints', () => {
    const { asFragment } = render(
      <Masthead
        display={{ default: 'inline', sm: 'inline', md: 'inline', lg: 'inline', xl: 'inline', '2xl': 'inline' }}
      >
        test
      </Masthead>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify stack display breakpoints', () => {
    const { asFragment } = render(
      <Masthead display={{ default: 'stack', sm: 'stack', md: 'stack', lg: 'stack', xl: 'stack', '2xl': 'stack' }}>
        test
      </Masthead>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  Object.values(['insetNone', 'insetXs', 'insetSm', 'insetMd', 'insetLg', 'insetXl', 'inset2xl', 'inset3xl'] as [
    'insetNone',
    'insetXs',
    'insetSm',
    'insetMd',
    'insetLg',
    'insetXl',
    'inset2xl',
    'inset3xl'
  ]).forEach((inset) => {
    test(`verify ${inset} inset breakpoints`, () => {
      const { asFragment } = render(
        <Masthead inset={{ default: inset, sm: inset, md: inset, lg: inset, xl: inset, '2xl': inset }}>test</Masthead>
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});

describe('MastheadLogo', () => {
  test('verify basic', () => {
    const { asFragment } = render(<MastheadLogo>test</MastheadLogo>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const { asFragment } = render(<MastheadLogo className="custom-css">test</MastheadLogo>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify default component', () => {
    const { asFragment } = render(<MastheadLogo>test</MastheadLogo>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom component', () => {
    const { asFragment } = render(<MastheadLogo component="div">test</MastheadLogo>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify anchor component with href', () => {
    const { asFragment } = render(<MastheadLogo href="#">test</MastheadLogo>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('MastheadContent', () => {
  test('verify basic', () => {
    const { asFragment } = render(<MastheadContent>test</MastheadContent>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const { asFragment } = render(<MastheadContent className="custom-css">test</MastheadContent>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('MastheadBrand', () => {
  test('verify basic', () => {
    const { asFragment } = render(<MastheadBrand>test</MastheadBrand>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const { asFragment } = render(<MastheadBrand className="custom-css">test</MastheadBrand>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('MastheadToggle', () => {
  test('verify basic', () => {
    const { asFragment } = render(<MastheadToggle>test</MastheadToggle>);

    expect(asFragment()).toMatchSnapshot();
  });

  test('verify custom class', () => {
    const { asFragment } = render(<MastheadToggle className="custom-css">test</MastheadToggle>);

    expect(asFragment()).toMatchSnapshot();
  });
});
