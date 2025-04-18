import _ from 'lodash';
import React from 'react';
import { htmlToReact } from '../utils';
import ActionLink from './ActionLink';

const Footer = (props) => {
  return (
    <footer id="colophon" className="site-footer outer">
      <div>
        <table cellPadding={0} cellSpacing={0} border={0}>
          <tbody>
            <tr>
              <td
                style={{
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '7.5pt',
                }}
              >
                <table
                  width="95%"
                  cellPadding={0}
                  cellSpacing={0}
                  border={0}
                  style={{
                    fontFamily: 'Arial, Helvetica, sans-serif',
                    fontSize: '7.5pt',
                  }}
                >
                  <tbody>
                    <tr>
                      <td
                        style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '7.5pt',
                        }}
                        align="left"
                      >
                        <a
                          target="_blank"
                          href="https://search.freefind.com/siteindex.html?si=14588965"
                          rel="noopener noreferrer"
                        >
                          index
                        </a>
                      </td>
                      <td
                        style={{
                          fontFamily: 'Arial, Helvetica, sans-serif',
                          fontSize: '7.5pt',
                        }}
                        align="center"
                      >
                        <a
                          target="_blank"
                          href="https://search.freefind.com/find.html?si=14588965&m=0&p=0"
                          rel="noopener noreferrer"
                        >
                          sitemap
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <form
                  style={{
                    margin: 'auto',
                    marginTop: '1px',
                  }}
                  action="https://search.freefind.com/find.html"
                  method="get"
                  acceptCharset="utf-8"
                  target="_self"
                >
                  <input type="hidden" name="si" defaultValue={14588965} />
                  <input type="hidden" name="pid" defaultValue="r" />
                  <input type="hidden" name="n" defaultValue={0} />
                  <input type="hidden" name="_charset_" defaultValue />
                  <input type="hidden" name="bcd" defaultValue="÷" />
                  <input type="text" name="query" size={15} />
                  <input type="submit" defaultValue="search" />
                </form>
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: 'center',
                  fontFamily: 'Arial, Helvetica, sans-serif',
                  fontSize: '8 pt',
                  paddingTop: '2px',
                }}
              ></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="inner">
        <div id="search" className="inner"></div>
        <div className="site-footer-inside">
          <p className="site-info">
            {_.get(props, 'pageContext.site.siteMetadata.footer.content', null) && (
              <span className="copyright">
                {htmlToReact(_.get(props, 'pageContext.site.siteMetadata.footer.content', null))}
              </span>
            )}
            {_.map(_.get(props, 'pageContext.site.siteMetadata.footer.links', null), (action, action_idx) => (
              <ActionLink key={action_idx} {...props} action={action}></ActionLink>
            ))}
          </p>
          {_.get(props, 'pageContext.site.siteMetadata.footer.has_social', null) && (
            <div className="social-links">
              {_.map(
                _.get(props, 'pageContext.site.siteMetadata.footer.social_links', null),
                (action, action_idx) => {
                  return <ActionLink key={action_idx} {...props} action={action} />;
                }
              )}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
