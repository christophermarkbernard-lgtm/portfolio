# Portfolio Case Studies - Draft v1
## Chris Bernard | chrisbernard.me

Last updated: 2026-04-09

---

## Proposed Site Structure

### Portfolio Index Page (portfolio.html)
- Card grid layout, one card per project
- Each card: hero image/video, project title, company, one-line hook, role tag
- Cards link to individual case study pages
- Speed Round section at bottom of index (no standalone page)

### Individual Case Study Pages
- `case-donnelly.html` - Solving for the Enterprise
- `case-fortellis.html` - Building the Developer Network & Apps
- `case-design-systems.html` - Crafting Design Systems
- `case-unify.html` - Converging the Application Suite
- `case-wrigley.html` - Creating a Destination

### Case Study Page Template
- Hero image/video
- Project metadata bar (Role, Company, Duration/Focus, Team/Platform)
- Narrative sections: Problem > How We Knew > What We Explored > What We Shipped > How We Knew It Worked
- Inline image galleries between sections
- Results/Impact metrics block
- "Next Project" navigation at bottom

---

# Case Study 1: Solving for the Enterprise

**Company:** Donnelly Financial Solutions
**Role:** Design Director
**Focus:** Enterprise UX, SEC Compliance
**Approach:** Design Thinking, Google Ventures Sprint Methodology

### The Problem

Donnelly Financial's tools handled SEC filings and Sarbanes-Oxley compliance for Fortune 500 companies. They worked, but they were slow. Filing cycles stretched across weeks, involving dozens of fragmented applications, manual handoffs, and function-based workflows that required users to move through every step regardless of relevance.

Then the regulatory environment changed. Reporting that had been annual shifted to monthly. The existing process wasn't just inefficient anymore. It was structurally incompatible with the new requirements. What took weeks now had to happen in days.

### How We Knew

We conducted stakeholder interviews across business units and analyzed filing time benchmarks. The data confirmed what users were already telling us: the tools forced linear, function-based workflows that couldn't scale to monthly cadence. Teams were spending the majority of their time navigating the system rather than doing the actual compliance work. Internal benchmarks showed the gap between current performance and the new regulatory timeline was not something incremental improvements could close.

### What We Explored

Our first approach was a guided wizard flow, a step-by-step process that would walk users through filings in sequence. It tested well for simple cases but collapsed under the complexity of real-world SEC filings where multiple teams work on overlapping sections simultaneously. The wizard imposed a rigid sequence on work that was inherently parallel and exception-driven.

### What We Shipped

We designed enterprise-class responsive web applications built around exception-based workflows. Instead of walking through every function, users saw only what required their attention. The system surfaced exceptions, flagged anomalies, and let teams work in parallel on the sections that mattered.

Key capabilities included inline editing, real-time reporting, document redlining with compare modes, inline commenting with context tracking, and personalized role-based workspaces. We consolidated dozens of applications into a streamlined experience using design thinking methodology and Google Ventures Sprint process, bringing executive leadership and subject matter experts together in focused sprint cycles.

### How We Knew It Worked

Filing times dropped from weeks to hours. This was validated against both internal benchmarks and customer-reported timelines. More importantly, the new design made monthly filing cadence viable, something the previous system could not support at all. Business unit R&D spend decreased, dozens of legacy workflows were retired, and both time-on-task and user satisfaction scores improved measurably.

### Results

- **Weeks to Hours** - Filing time reduction
- **Reduced** - Business unit R&D spend
- **Modernized** - Dozens of workflows consolidated
- **Improved** - Time on task and satisfaction

---

# Case Study 2: Building the Developer Network & Apps

**Company:** CDK Global
**Role:** Design Director
**Focus:** Platform Design, API Marketplace, Developer Experience
**Design System:** Radial

### The Problem

The automotive industry ran on proprietary, one-to-one data-sharing arrangements. Dealerships, OEMs, and vendors all needed access to the same data, but every integration was a custom deal with no standardization, no security of IP, and no self-service path for developers. CDK controlled a massive amount of dealer data, and the friction of accessing it had become a liability. Dealers were frustrated. Vendors were frustrated. And CDK was facing significant regulatory and customer pressure over how difficult it was for customers to access their own data.

### How We Knew

The signals were hard to miss. Regulatory scrutiny and direct customer feedback made it clear that the status quo was untenable. Beyond the external pressure, dealer feedback was consistent: they wanted open, standardized access. Meanwhile, the broader software industry had moved decisively toward API-first architectures. Every other vertical had developer platforms and marketplaces. Automotive was years behind, still relying on handshake deals and proprietary connectors.

### What We Explored

We initially explored a traditional direct sales model, which was familiar territory for CDK's dealer-facing sales organization. But the target audience for an API platform isn't dealership GMs. It's developers. And developers don't want to sit through a sales pitch and negotiate licensing terms. They want to browse, try, and build. We pivoted to a product-led growth model with "try before you buy" and "pay-as-you-go" pricing, letting developers self-serve and evaluate APIs before committing. This was a significant cultural shift for a company built on enterprise sales motions.

### What We Shipped

Fortellis became the first developer network and API marketplace in the automotive industry. We designed the end-to-end platform: API hosting, monitoring, publishing, marketplace discovery, and flexible pricing models. The platform was built on CDK's design language, Radial.

We also built Hailer, a standout application on the platform, a customized ride-hailing solution for dealerships that integrated Lyft Concierge with OEM warranty centers and dealer management systems. It featured specialized billing, security controls, and demonstrated what third-party developers could build on the Fortellis ecosystem.

### How We Knew It Worked

Within the first year, the platform handled over 150 million API calls. Hailer alone addressed a potential market of 16,000 dealerships, saving an estimated $10,000 per month per location in transportation logistics. More fundamentally, the platform shifted CDK's posture from data gatekeeper to data platform, turning regulatory and reputational pressure into a growth engine.

### Results

- **150M+** - API calls in first year
- **16,000** - Potential dealership customers via Hailer
- **$10K/mo** - Estimated savings per dealership
- **First** - Developer network in the automotive industry

---

# Case Study 3: Crafting Design Systems

**Company:** CDK Global
**Role:** Design Director
**Focus:** Design Systems, Component Libraries
**Tech Stack:** React, Figma, Storybook

### The Problem

CDK Global had adopted Material Design as the foundation for its product suite. On paper, it was a reasonable choice. In practice, it was a poor fit. Material Design was optimized for Android mobile-first experiences. CDK's products were high-density enterprise applications for the automotive industry, requiring complex data tables, dense information displays, and sophisticated data visualization. The fork couldn't scale to meet those needs. Designers were working around the system instead of with it, and developers were building custom overrides for nearly every complex component.

### How We Knew

Engineering teams were shipping slower than expected, and the root cause kept tracing back to the design system. Components didn't exist for common enterprise patterns, so developers were building one-offs. Design inconsistency was spreading across products. Every team was solving the same problems differently because the shared foundation wasn't actually shared. It was a collection of workarounds wearing a Material Design skin.

### What We Explored

We evaluated existing design systems on the market, including models like IBM's Carbon and Salesforce's Lightning. But the systems available at the time were purpose-built for their own ecosystems and use cases. Automotive enterprise software has specific demands: dealer management workflows, parts inventory tables, financial reporting dashboards, and multi-role interfaces that none of the off-the-shelf systems addressed. We needed something tailored to the domain.

### What We Shipped

We built two design systems from the ground up. **Radial** was the enterprise system, purpose-built for CDK's core products. It handled data visualization, information density, table manipulation, and complex form patterns that Material Design couldn't support. We shipped 100+ components with comprehensive Figma libraries, React implementations, Storybook documentation, a developer playground, and design token architecture with CSS standards.

Following CDK's acquisition of Roadster in 2021, we created a companion system optimized for consumer-facing digital retail experiences: online vehicle purchasing, credit applications, and multi-channel sales tools. Both systems were built with white-label capabilities and robust theming, enabling rapid corporate rebranding and partner customization while maintaining cross-product consistency.

### How We Knew It Worked

We measured engineering delivery velocity and development defect rates in before-and-after scenarios. Development speed doubled. Defects dropped by 50%. Beyond the metrics, the qualitative shift was just as telling: teams stopped building custom components and started shipping features. The design system became the foundation rather than the obstacle.

### Results

- **2x** - Development speed increase
- **50%** - Defect reduction
- **100+** - Components built
- **Unified** - Cross-application consistency

---

# Case Study 4: Converging the Application Suite

**Company:** CDK Global
**Role:** Design Director
**Focus:** Product Design, Legacy Modernization
**Users:** 15,000+ Dealerships

### The Problem

CDK's legacy dealer management system, Drive, was the backbone of over 15,000 dealerships. It was powerful, but decades of acquisitions and bolt-on products had created a fragmented experience. Dealers weren't using one product. They were navigating dozens of disconnected applications with inconsistent interfaces, separate credentials, and no shared context between tools.

### How We Knew

We conducted a formal audit across all CDK applications and uncovered that dealers faced 58 different login screens. Fifty-eight. Each application had its own authentication, its own navigation model, and its own design language. User research confirmed what the audit suggested: dealers were spending significant time just figuring out where to go and how to get in, before they could do any actual work. The fragmentation wasn't just a UX annoyance. It was a drag on productivity and a barrier to selling new products, because every addition made the ecosystem harder to use.

### What We Explored

The obvious answer was a full rebuild. Retire the legacy stack, build a modern unified product from the ground up. But CDK's product suite was massive and deeply embedded in dealership operations. A full rebuild would have taken years, and during that time customers would be waiting for innovation and new features while engineering focused on reconstruction. We couldn't ask 15,000 dealerships to pause their businesses while we rewrote the platform.

### What We Shipped

We designed Unify as an interface layer that sat on top of the existing infrastructure. Every CDK application could function within a single modern experience without requiring data migration or backend rewrites. Dealers got one login, one workspace, and one consistent interface. Under the hood, the legacy systems kept running.

The experience included customizable workspaces, single sign-on, light and dark mode, AI-powered customer support, and a fully responsive mobile experience. We also built Drive Flex, which brought the core DMS functionality into the Unify shell, proving that even the oldest and most complex applications could be modernized through the interface layer approach.

### How We Knew It Worked

During the beta period, 96% of dealers who were given access actively used it. That wasn't a forced migration metric. That was organic adoption. People who had the option to keep using the old tools chose Unify instead. Going into general availability, that number gave us strong confidence that the approach was right: meet customers where they are, don't make them wait, and let the experience layer do the heavy lifting.

### Results

- **96%** - Beta adoption rate
- **58 to 1** - Login screens consolidated
- **15,000+** - Dealerships served
- **Modernized** - Legacy DMS without migration

---

# Case Study 5: Creating a Destination

**Company:** Gallagher Way / Park at Wrigley
**Role:** Design Lead
**Focus:** WebGL, Interactive Experience

### The Problem

Gallagher Way, the mixed-use development surrounding Wrigley Field, needed a digital experience that matched the ambition of the physical space. The venue wasn't a standard commercial property. It was an entertainment destination tied to one of the most iconic locations in American sports. A standard website with floor plans and contact forms wasn't going to communicate what the space actually felt like or drive the kind of engagement the client wanted.

### How We Knew

The client was explicit: they wanted to push. The digital presence needed to feel like an experience, not a brochure. Early conversations made it clear that the gap wasn't informational. Prospective tenants and visitors could get the facts anywhere. The gap was emotional. Nothing in the existing digital landscape conveyed the energy and scale of the development in a way that made people want to be there.

### What We Explored

We started with traditional web frameworks, building interactive layouts and map-based navigation using conventional front-end approaches. The results were functional but flat. They communicated information without conveying any sense of place. For a development built around experience and atmosphere, "functional but flat" was a failure state. The client pushed back, and rightly so.

### What We Shipped

We moved to WebGL, building a fully interactive 3D experience that let users explore the development spatially. This was an investment in what was possible with browser-based rendering at the time, pushing the boundaries of what a web experience could feel like without requiring downloads or plugins. Users could navigate the space, explore venues, and understand the development's layout in a way that static pages or traditional maps couldn't deliver.

### How We Knew It Worked

Success was measured by engagement. Users spent meaningfully more time interacting with the WebGL experience compared to industry benchmarks for commercial real estate sites. The experience became a differentiator for the property itself, demonstrating that the development was as forward-thinking digitally as it was physically.

---

# The Speed Round
**Selected Projects Across Consumer, Enterprise & Emerging Tech**

*These projects remain on the portfolio index page as a card grid, not standalone pages.*

**GoPro**
Windows Phone and Windows 8 applications. Launched as the #1 app on the Windows Phone marketplace. Designed the full capture, editing, and sharing experience for a platform that demanded performance-first interaction design.

**Afterlight**
Photo editing application for Windows Phone. #1 paid app at launch. Translated a beloved iOS experience to a new platform while respecting the design conventions and constraints of the Windows ecosystem.

**NPR One**
Contributed to the Windows Phone experience for NPR's personalized listening app. Focused on delivering a seamless audio-first interface within a small-screen, mobile-first context.

**Plex**
Windows 8 media server application. Designed the living room experience for personal media, balancing content density with lean-back usability across tablet and desktop form factors.

**Yummly**
Recipe discovery and cooking application for Windows. Focused on visual-first browsing and contextual filtering to help users move from inspiration to execution.

**TradingView**
Financial charting and social trading platform. Worked on information-dense visualization interfaces where clarity and speed are non-negotiable.

**USA Today**
News application for emerging platforms. Focused on content hierarchy, readability, and cross-device consistency for one of the largest news organizations in the country.

**Copia**
E-reading and book-sharing platform. Designed social reading features and library management for a product trying to make digital reading more communal.

**Facebook Internal**
HR systems and internal media tools built through a Truth Labs partnership. Enterprise-grade tools for one of the largest technology companies in the world.

**Redbox Streaming**
Consumer streaming application for Windows Phone. Designed browse, rent, and playback flows for physical-to-digital rental transition.
