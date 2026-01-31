import React from 'react';
import ArticleHeader from '../blog/ArticleHeader/ArticleHeader';
import ArticleFooter from '../blog/ArticleFooter/ArticleFooter';

import styles from './commonArticleStyles.module.scss';

export default function TitleUkrainskouTaEngliash({articleData}) {
  return (
    <div className={styles.article}>
      <div className={styles.maxWidthArticleTitleWrapper}>
        <ArticleHeader articleData={articleData}/>
      </div>
      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <p className={styles.articleText}>
            Certainly! Here’s a blog article about <b>MCP-UI</b>, covering the pros and cons, recommended JavaScript
            libraries, and respected authors in the space. This article will focus on practical insight for developers
            curious about integrating Model Context Protocol (MCP) into their applications, especially within the JS
            ecosystem.
          </p>

          <p className={styles.articleText}>
            -
          </p>

          <p className={styles.articleText}>
            # MCP-UI: The Pros, Cons, and Best Resources (JS Ecosystem Perspective)
          </p>

          <p className={styles.articleText}>
            <b>The Model Context Protocol (MCP)</b> is quickly becoming a hot topic for those building tool-augmented AI
            user interfaces. In the same way that HTTP enabled interoperability for the early web, MCP is designed to
            let AI models (especially LLMs and agents) interface with a broad variety of tools and services,
            dynamically, at runtime. But what does this mean for UI and frontend developers? And how does the JS
            ecosystem support MCP workflows? Let’s break it down.
          </p>

          <p className={styles.articleText}>
            -
          </p>
        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>🚀 What is MCP-UI?</h2>

          <p className={styles.articleText}>
            <b>MCP-UI</b> refers to UIs or frontend libraries that leverage MCP servers. In short, MCP allows you to add
            and discover new tool integrations (file systems, search, code editors, cloud APIs, etc.) _at runtime_
            rather than coding each integration at design time.
          </p>

          <p className={styles.articleText}>
            A classic example is <b>Claude Desktop</b> or <b>Cursor</b>, which expose a UI for connecting to MCP
            servers—the user (rather than solely the developer) can add/remove integrations without modifying core
            application code.
          </p>

          <p className={styles.articleText}>
            -
          </p>

        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>✔️ Pluses (Why Use MCP-UI?)</h2>

          <p className={styles.articleText}>
            ### 1. <b>Runtime Extensibility / Modularity</b> - Users can _dynamically add new capabilities (MCP
            servers)_ to an app at runtime, not just at build time. - Similar in philosophy to browser extensions or the
            USB protocol: plug in what you need, when you need it.
          </p>

          <p className={styles.articleText}>
            ### 2. <b>Unified Interaction Model</b> - MCP standardizes tool invocation, so LLMs/agents can discover
            capabilities and interact with different services/tools using a single protocol (JSON-RPC under the hood). -
            This is especially useful for building _agentic_ UIs, where an AI might want to, say, pull data from Notion,
            GitHub issues, and query an SQL database—all through the same interface.
          </p>

          <p className={styles.articleText}>
            ### 3. <b>No Hardcoding/Boilerplate</b> - Avoids re-writing tool APIs, wrappers, and SDK glue code for each
            integration. - As more MCP servers emerge, just add by URL becomes the new plug-and-play (though see
            _discovery drawbacks_ below).
          </p>

          <p className={styles.articleText}>
            ### 4. <b>Ecosystem Growth</b> - Many organizations now provide official or community MCP servers: GitHub,
            Stripe, Notion, Slack, Microsoft, etc. - Platforms like <a href="https://glama.ai/mcp/servers"
                                                                       target="_blank"
                                                                       rel="noreferrer">glama.ai/mcp/servers</a> curate
            directories for easy discovery.
          </p>

          <p className={styles.articleText}>
            -
          </p>

        </div>
      </div>

      <div className={styles.articleOddSection}>
        <div className={styles.maxWidthArticleSectionWrapper}>
          <h2 className={styles.subTitle}>👎 Minuses (Gotchas and Risks)</h2>

          <p className={styles.articleText}>
            ### 1. <b>Rigid Structure / Slow to Evolve</b> - MCP is more structured than classic web protocols (à la
            Gopher vs. Web vs. FTP analogy). - The format (schema, registration, JSON-RPC conventions) can slow down
            rapid, organic extension and experimentation.
          </p>

          <p className={styles.articleText}>
            ### 2. <b>Self-Contained Ecosystem & Discovery Problem</b> - Most MCP servers don’t “link” to each other.
            Integrations can be siloed there’s no universal crawling/browsing experience yet (like the browser’s early
            Mosaic days, before search engines). - Users must stumble upon or search for MCP server URLs unless a
            registry/marketplace emerges.
          </p>

          <p className={styles.articleText}>
            ### 3. <b>JS/Frontend Library Maturity</b> - Compared to HTTP, JS and React libraries for MCP are new and
            can lack polish or suffer breaking changes. - Many available MCP clients are built for Node.js instead of
            browsers. WebSocket or local bridge architecture is sometimes required (see frameworks like <a
            href="https://github.com/modelcontextprotocol/client-js" target="_blank"
            rel="noreferrer">`@modelcontextprotocol/client`</a> or <a href="https://github.com/punkpeye/fastmcp"
                                                                      target="_blank" rel="noreferrer">fastmcp</a>).
          </p>

          <p className={styles.articleText}>
            ### 4. <b>Stateful, Complex Semantics</b> - Unlike HTTP (stateless), MCP keeps connection and session state.
            This can introduce hazards: failed handshakes, poorly handled disconnects, harder error recovery.
          </p>

          <p className={styles.articleText}>
            ### 5. <b>Security/Sandboxing</b> - While MCP doesn’t eliminate the need for API keys or auth (often just
            shifts it to OAuth or local runtime), it adds layers that can confuse users. - Slow emergence of standard,
            auditable permission/whitelisting UIs for non-devs.
          </p>

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

          <p className={styles.articleText}>
            ### 1. <b>@modelcontextprotocol/client</b> - <a href="https://github.com/modelcontextprotocol/client-js"
                                                            target="_blank" rel="noreferrer">GitHub</a> - The canonical
            JS/TS client for consuming MCP servers in your app. - Supports JSON-RPC, WebSocket and stdio bridges still
            maturing but best for app frameworks (Claude Desktop, Cursor, Goose, Highlight.ai).
          </p>

          <p className={styles.articleText}>
            ### 2. <b>FastMCP</b> - <a href="https://github.com/punkpeye/fastmcp" target="_blank"
                                       rel="noreferrer">GitHub</a> - Lightweight framework for building MCP-compliant
            servers/clients in Node.js. - Also offers <a href="https://github.com/punkpeye/mcp-proxy" target="_blank"
                                                         rel="noreferrer">`mcp-proxy`</a> for bridging protocols.
          </p>

          <p className={styles.articleText}>
            ### 3. <b>Third-Party Registries, Wrappers, Toolkits</b> - <a href="https://glama.ai/mcp/servers"
                                                                          target="_blank"
                                                                          rel="noreferrer">glama.ai/mcp/servers</a>: The
            best public registry for trying out and inspecting MCP servers. - <a href="https://www.mcp.run/"
                                                                                 target="_blank"
                                                                                 rel="noreferrer">mcp.run</a> — instant
            WASM-based MCP server deployments for testing (WASM = browser-friendly, but still evolving).
          </p>

          <p className={styles.articleText}>
            ### 4. <b>Up-and-Coming/Experimental</b> - <a href="https://github.com/block/goose" target="_blank"
                                                          rel="noreferrer">block/goose</a>: Next-gen agent framework,
            with open source MCP support. - <a href="https://github.com/elroy-bot/mcp-hfspace" target="_blank"
                                               rel="noreferrer">mcp-hfspace</a>: Bridge for integrating Hugging Face
            Spaces into your MCP ecosystem.
          </p>

          <p className={styles.articleText}>
            #### Note: Library stability is rapidly improving but expect breaking changes as the ecosystem moves fast
            and the protocol spec itself still iterates.
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
              <p>**ondr.sh** ([blog](https://www.ondr.sh/blog/)): Clear, technical discussion around MCP, agent
                interfaces, and protocol design philosophy. Their “thoughts on MCP” and “AI-web” series are
                must-reads.</p>
            </li>
            <li className={styles.discList} style={{
              color: `#${articleData.article_color}`
            }}>
              <p>**punkpeye** ([GitHub](https://github.com/punkpeye/)): Author of fastmcp, mcp-proxy, and active in
                tooling/protocol design. Great open-source code and deep dives.</p>
            </li>
            <li className={styles.discList} style={{
              color: `#${articleData.article_color}`
            }}>
              <p>**Anthropic** ([docs](https://spec.modelcontextprotocol.io/)): Maintainers of the MCP spec. Official
                docs contain the protocol’s reference implementation, changelogs, and design rationale.</p>
            </li>
            <li className={styles.discList} style={{
              color: `#${articleData.article_color}`
            }}>
              <p>**Maria Naggaga**, Connect Once, Integrate Anywhere with MCP — for high-level, product-oriented
                overviews.</p>
            </li>
            <li className={styles.discList} style={{
              color: `#${articleData.article_color}`
            }}>
              <p>**glama.ai** ([site](https://glama.ai/mcp/servers)): Not an individual but an excellent resource for
                server discovery, playgrounds, and API search.</p>
            </li>
            <li className={styles.discList} style={{
              color: `#${articleData.article_color}`
            }}>
              <p>[“MCP vs. API Explained” (HN/Reddit discussions)](https://news.ycombinator.com/item?id=43304457): The
                best place to find thoughtful, adversarial pros and cons, plus real-world usage stories.</p>
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
            MCP-UI is not just “yet another API protocol”—it’s an attempt to make AI-augmented apps _extensible and
            user-friendly at runtime_. Its structure brings composability and a unified interaction model, but (like
            USB, LSP, or OpenAPI) may risk rigidity and complexity creep. The JS/TS tooling and resources are improving
            but still somewhat raw.
          </p>

          <p className={styles.articleText}>
            Consider starting with official clients or playgrounds before investing in bespoke MCP-UI
            solutions—especially if working in production code. And, as discovery tools, bridging proxies, and
            centralized registries mature, expect the workflow to get slicker.
          </p>

          <p className={styles.articleText}>
            <b>Wishing you good luck building agentic, extensible AI interfaces!</b>
          </p>

          <p className={styles.articleText}>
            -
          </p>

          <p className={styles.articleText}>
            <b>Have a favorite MCP library or meta-framework not listed here? Leave a comment and share your
              experience!</b>
          </p>

        </div>
      </div>

      <div className={styles.articleEvenSection}>
        <ArticleFooter articleData={articleData}/>
      </div>
    </div>
  );
};
  