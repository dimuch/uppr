
    import React from 'react';
    import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
    import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

    import styles from './commonArticleStyles.module.scss';

      export default function Fgsfgsfg({ articleData }) {
          return (
              <div className={styles.article}>
                  <div className={styles.maxWidthArticleTitleWrapper}>
                      <ArticleHeader articleData={articleData}/>
                  </div>
                  
            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>🚀 What is MCP-UI?</h2>

                    <p className={styles.articleText}>
                        <b>MCP-UI</b> refers to UIs or frontend libraries that leverage MCP servers. In short, MCP allows you to add and discover new tool integrations (file systems, search, code editors, cloud APIs, etc.) _at runtime_ rather than coding each integration at design time.
                    </p>

                    <p className={styles.articleText}>
                        A classic example is <b>Claude Desktop</b> or <b>Cursor</b>, which expose a UI for connecting to MCP servers—the user (rather than solely the developer) can add/remove integrations without modifying core application code.
                    </p>

                    <p className={styles.articleText}>
                        -
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>✔️ Pluses (Why Use MCP-UI?)</h2>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Runtime Extensibility / Modularity**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Users can _dynamically add new capabilities (MCP servers)_ to an app at runtime, not just at build time.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Similar in philosophy to browser extensions or the USB protocol: plug in what you need, when you need it.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Unified Interaction Model**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>MCP standardizes tool invocation, so LLMs/agents can discover capabilities and interact with different services/tools using a single protocol (JSON-RPC under the hood).</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>This is especially useful for building _agentic_ UIs, where an AI might want to, say, pull data from Notion,  GitHub issues, and query an SQL database—all through the same interface.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**No Hardcoding/Boilerplate**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Avoids re-writing tool APIs, wrappers, and SDK glue code for each integration.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>As more MCP servers emerge, just add by URL becomes the new plug-and-play (though see _discovery drawbacks_ below).</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Ecosystem Growth**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Many organizations now provide official or community MCP servers: GitHub, Stripe, Notion, Slack, Microsoft, etc.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Platforms like [glama.ai/mcp/servers](https://glama.ai/mcp/servers) curate directories for easy discovery.</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        -
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>👎 Minuses (Gotchas and Risks)</h2>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Rigid Structure / Slow to Evolve**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>MCP is more structured than classic web protocols (à la Gopher vs. Web vs. FTP analogy).</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>The format (schema, registration, JSON-RPC conventions) can slow down rapid, organic extension and experimentation.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Self-Contained Ecosystem &amp; Discovery Problem**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Most MCP servers don’t “link” to each other. Integrations can be siloed there’s no universal crawling/browsing experience yet (like the browser’s early Mosaic days, before search engines).</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Users must stumble upon or search for MCP server URLs unless a registry/marketplace emerges.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**JS/Frontend Library Maturity**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Compared to HTTP, JS and React libraries for MCP are new and can lack polish or suffer breaking changes.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Many available MCP clients are built for Node.js instead of browsers. WebSocket or local bridge architecture is sometimes required (see frameworks like [`@modelcontextprotocol/client`](https://github.com/modelcontextprotocol/client-js) or [fastmcp](https://github.com/punkpeye/fastmcp)).</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Stateful, Complex Semantics**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Unlike HTTP (stateless), MCP keeps connection and session state. This can introduce hazards: failed handshakes, poorly handled disconnects, harder error recovery.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Security/Sandboxing**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>While MCP doesn’t eliminate the need for API keys or auth (often just shifts it to OAuth or local runtime), it adds layers that can confuse users.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Slow emergence of standard, auditable permission/whitelisting UIs for non-devs.</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        -
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>🏗️ Best JS/TS Libraries for MCP-UI</h2>

                    <p className={styles.articleText}>
                        Here are notable libraries and frameworks for the JavaScript/TypeScript ecosystem:
                    </p>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**@modelcontextprotocol/client**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[GitHub](https://github.com/modelcontextprotocol/client-js)</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>The canonical JS/TS client for consuming MCP servers in your app.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Supports JSON-RPC, WebSocket and stdio bridges still maturing but best for app frameworks (Claude Desktop, Cursor, Goose, Highlight.ai).</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**FastMCP**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[GitHub](https://github.com/punkpeye/fastmcp)</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Lightweight framework for building MCP-compliant servers/clients in Node.js.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>Also offers [`mcp-proxy`](https://github.com/punkpeye/mcp-proxy) for bridging protocols.</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Third-Party Registries, Wrappers, Toolkits**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[glama.ai/mcp/servers](https://glama.ai/mcp/servers): The best public registry for trying out and inspecting MCP servers.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[mcp.run](https://www.mcp.run/) — instant WASM-based MCP server deployments for testing (WASM = browser-friendly, but still evolving).</p>
                        </li>
                    </ul>

                    <ol className={`${styles.articleList} ${styles.numberedList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Up-and-Coming/Experimental**</p>
                        </li>
                    </ol>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[block/goose](https://github.com/block/goose): Next-gen agent framework, with open source MCP support.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[mcp-hfspace](https://github.com/elroy-bot/mcp-hfspace): Bridge for integrating Hugging Face Spaces into your MCP ecosystem.</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        #### Note: Library stability is rapidly improving but expect breaking changes as the ecosystem moves fast and the protocol spec itself still iterates.
                    </p>

                    <p className={styles.articleText}>
                        -
                    </p>

                </div>
            </div>

            <div className={styles.articleOddSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>🏅 Authors and Blogs Worth Following</h2>

                    <ul className={`${styles.articleList}`}>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**ondr.sh** ([blog](https://www.ondr.sh/blog/)): Clear, technical discussion around MCP, agent interfaces, and protocol design philosophy. Their “thoughts on MCP” and “AI-web” series are must-reads.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**punkpeye** ([GitHub](https://github.com/punkpeye/)): Author of fastmcp, mcp-proxy, and active in tooling/protocol design. Great open-source code and deep dives.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Anthropic** ([docs](https://spec.modelcontextprotocol.io/)): Maintainers of the MCP spec. Official docs contain the protocol’s reference implementation, changelogs, and design rationale.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**Maria Naggaga**, Connect Once, Integrate Anywhere with MCP — for high-level, product-oriented overviews.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>**glama.ai** ([site](https://glama.ai/mcp/servers)): Not an individual but an excellent resource for server discovery, playgrounds, and API search.</p>
                        </li>
                        <li className={styles.discList} style={{
                            color: `#${articleData.article_color}`
                        }}>
                            <p>[“MCP vs. API Explained” (HN/Reddit discussions)](https://news.ycombinator.com/item?id=43304457): The best place to find thoughtful, adversarial pros and cons, plus real-world usage stories.</p>
                        </li>
                    </ul>

                    <p className={styles.articleText}>
                        -
                    </p>

                </div>
            </div>

            <div className={styles.articleEvenSection}>
                <div className={styles.maxWidthArticleSectionWrapper}>
                    <h2 className={styles.subTitle}>📝 Conclusion</h2>

                    <p className={styles.articleText}>
                        MCP-UI is not just “yet another API protocol”—it’s an attempt to make AI-augmented apps _extensible and user-friendly at runtime_. Its structure brings composability and a unified interaction model, but (like USB, LSP, or OpenAPI) may risk rigidity and complexity creep. The JS/TS tooling and resources are improving but still somewhat raw.
                    </p>

                    <p className={styles.articleText}>
                        Consider starting with official clients or playgrounds before investing in bespoke MCP-UI solutions—especially if working in production code. And, as discovery tools, bridging proxies, and centralized registries mature, expect the workflow to get slicker.
                    </p>

                    <p className={styles.articleText}>
                        <b>Wishing you good luck building agentic, extensible AI interfaces!</b>
                    </p>

                    <p className={styles.articleText}>
                        -
                    </p>

                    <p className={styles.articleText}>
                        <b>Have a favorite MCP library or meta-framework not listed here? Leave a comment and share your experience!</b>
                    </p>

                </div>
            </div>

                  <div className={styles.articleEvenSection}>
                      <ArticleFooter articleData={articleData}/>
                  </div>
              </div>
          );
      };
  