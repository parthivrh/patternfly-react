import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  MastheadBrand,
  MastheadLogo,
  MastheadContent,
  Button
} from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/js/icons/bars-icon';

export const MastheadDisplayStackInlineResponsive: React.FunctionComponent = () => (
  <Masthead id="stack-inline-masthead" display={{ default: 'inline', lg: 'stack', '2xl': 'inline' }}>
    <MastheadMain>
      <MastheadToggle>
        <Button variant="plain" onClick={() => {}} aria-label="Global navigation" icon={<BarsIcon />} />
      </MastheadToggle>
      <MastheadBrand>
        <MastheadLogo component="a">Logo</MastheadLogo>
      </MastheadBrand>
    </MastheadMain>
    <MastheadContent>
      <span>Content</span>
    </MastheadContent>
  </Masthead>
);
