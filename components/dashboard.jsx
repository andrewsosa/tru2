import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { Section, Container, Content,
  Modal, Columns } from 'react-bulma-components';

import Post from './post';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin: 0 auto;
  box-sizing: border-box;
  grid-gap: 20px;
`;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    const { router } = props;
    this.router = router;
    this.state = {
      showModal: router.query.postId !== undefined,
      postId: router.query.postId,
    };
  }

  onPostClick(e, id) {
    // e.preventDefault();
    // this.router.push(`/?postId=${id}`);
    // this.setState({
    //   showModal: true,
    //   postId: id,
    // });
  }

  onDismissModal() {
    this.setState({ showModal: false, postId: null });
    this.router.push('/');
  }

  getContent(id) {
    const { content } = this.props;
    return content.find(el => el.id === parseInt(id, 10));
  }

  render() {
    const { content } = this.props;
    const { showModal, postId } = this.state;

    const columnStyle = { height: '100%' };
    const modalStyle = { width: '80vw' };
    const sectionStyle = {
      backgroundColor: 'white',
      height: '100%',
      borderRadius: '4px',
    };

    return (
      <Section>
        <Container>
          <Content>
            {
              showModal
              && (
                <Modal
                  show={showModal}
                  onClose={() => this.onDismissModal()}
                >
                  <Modal.Content style={modalStyle}>

                    <Columns gapless centered>
                      <Columns.Column size={6}>
                        <Section style={sectionStyle}>
                          {this.getContent(postId).body.slice(0, 30).replace('\n', '')}
                        </Section>
                      </Columns.Column>

                      {/* <Columns.Column size={4}>
                        <Section style={{ backgroundColor: 'lightgray', height: '100%' }}>
                          Hello, world!
                        </Section>
                      </Columns.Column> */}

                    </Columns>

                  </Modal.Content>
                </Modal>
              )
            }

            <Columns multiline>
              {content.map(post => (
                <Columns.Column key={post.id} size={4} style={columnStyle}>
                  <Post
                    key={post.id}
                    body={post.body.slice(0, 128).replace('\n', '')}
                    clickHandler={e => this.onPostClick(e, post.id)}
                  />
                </Columns.Column>
              ))}
            </Columns>
          </Content>
        </Container>
      </Section>
    );
  }
}

export default withRouter(Dashboard);
