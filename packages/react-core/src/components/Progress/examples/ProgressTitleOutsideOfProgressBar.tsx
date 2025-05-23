import {
  DescriptionList,
  DescriptionListGroup,
  DescriptionListTerm,
  DescriptionListDescription,
  Progress,
  ProgressMeasureLocation
} from '@patternfly/react-core';

export const ProgressTitleOutsideOfProgressBar: React.FunctionComponent = () => (
  <DescriptionList aria-label="Progress Title outside of progress bar">
    <DescriptionListGroup>
      <DescriptionListTerm id="title-outside-progress-example-label">Title outside of progress bar</DescriptionListTerm>
      <DescriptionListDescription>
        <Progress
          value={33}
          measureLocation={ProgressMeasureLocation.outside}
          aria-labelledby="title-outside-progress-example-label"
        />
      </DescriptionListDescription>
    </DescriptionListGroup>
  </DescriptionList>
);
