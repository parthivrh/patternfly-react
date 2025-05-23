import { Component, createRef, RefObject } from 'react';
import { Tabs, Tab, TabContent, TabTitleText, TabTitleIcon, Button } from '@patternfly/react-core';
import UsersIcon from '@patternfly/react-icons/dist/esm/icons/users-icon';

export class TabDemo extends Component {
  state = {
    activeTabKey: 0,
    activeTabKey2: 0,
    activeTabKey3: 0,
    activeTabKey4: 0,
    isTab2Hidden: true
  };
  private contentRef1: RefObject<HTMLDivElement | null>;
  private contentRef2: RefObject<HTMLDivElement | null>;
  private contentRef3: RefObject<HTMLDivElement | null>;

  constructor(props: {}) {
    super(props);

    this.contentRef1 = createRef<HTMLDivElement>();
    this.contentRef2 = createRef<HTMLDivElement>();
    this.contentRef3 = createRef<HTMLDivElement>();
  }

  // Toggle currently active tab
  private handleTabClick = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick2 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey2: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick3 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey3: tabIndex
    });
  };

  // Toggle currently active tab
  private handleTabClick4 = (_event: React.MouseEvent<HTMLElement, MouseEvent>, tabIndex: number | string) => {
    this.setState({
      activeTabKey4: tabIndex
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { isTab2Hidden } = this.state;

    return (
      <>
        <Button id="showTab2" onClick={() => this.setState({ isTab2Hidden: !isTab2Hidden })}>
          {isTab2Hidden ? 'Show' : 'Hide'} tab 2
        </Button>
        <Tabs id="unconnectedChildren" activeKey={this.state.activeTabKey} onSelect={this.handleTabClick}>
          <Tab
            className="custom-tab-1"
            id="demoTab1"
            eventKey={0}
            title={<TabTitleText>Tab item 1</TabTitleText>}
            tabContentId="demoTab1Section"
            tabContentRef={this.contentRef1}
          />
          <Tab
            className="custom-tab-2"
            id="demoTab2"
            eventKey={1}
            title={<TabTitleText>Tab item 2</TabTitleText>}
            tabContentId="demoTab2Section"
            tabContentRef={this.contentRef2}
            isHidden={isTab2Hidden}
          />
          <Tab
            id="demoTab3"
            eventKey={2}
            title={
              <>
                <TabTitleIcon>
                  <UsersIcon />
                </TabTitleIcon>
                <TabTitleText>Tab item 3</TabTitleText>
              </>
            }
            tabContentId="demoTab3Section"
            tabContentRef={this.contentRef3}
          />
        </Tabs>
        <div>
          <TabContent
            eventKey={0}
            id="demoTab1Section"
            ref={this.contentRef1 as RefObject<HTMLDivElement>}
            aria-label="Tab item 1"
            // eslint-disable-next-line no-console
            onAuxClick={(event) => console.log(event)}
          >
            Tab 1 section
          </TabContent>
          <TabContent
            eventKey={1}
            id="demoTab2Section"
            ref={this.contentRef2 as RefObject<HTMLDivElement>}
            aria-label="Tab item 2"
            hidden
          >
            Tab 2 section
          </TabContent>
          <TabContent
            eventKey={2}
            id="demoTab3Section"
            ref={this.contentRef3 as RefObject<HTMLDivElement>}
            aria-label="Tab item 3"
            hidden
          >
            Tab 3 section
          </TabContent>
        </div>
        <Tabs id="mountOnEnter" mountOnEnter activeKey={this.state.activeTabKey2} onSelect={this.handleTabClick2}>
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item 3</TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
        <Tabs id="unmountOnExit" unmountOnExit activeKey={this.state.activeTabKey3} onSelect={this.handleTabClick3}>
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item </TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
        <Tabs id="boxTabs" activeKey={this.state.activeTabKey4} onSelect={this.handleTabClick4} isBox>
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item </TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
        <Tabs id="verticalTabs" activeKey={this.state.activeTabKey4} onSelect={this.handleTabClick4} isVertical>
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item </TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
        <Tabs id="filledTabs" activeKey={this.state.activeTabKey4} onSelect={this.handleTabClick4} isFilled>
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item </TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
        <Tabs
          id="boxSecondaryVariantTabs"
          activeKey={this.state.activeTabKey4}
          onSelect={this.handleTabClick4}
          isBox
          variant="secondary"
        >
          <Tab eventKey={0} title={<TabTitleText>Tab item 1</TabTitleText>}>
            Tab 1 section
          </Tab>
          <Tab eventKey={1} title={<TabTitleText>Tab item 2</TabTitleText>}>
            Tab 2 section
          </Tab>
          <Tab eventKey={2} title={<TabTitleText>Tab item </TabTitleText>}>
            Tab 3 section
          </Tab>
        </Tabs>
      </>
    );
  }
}
