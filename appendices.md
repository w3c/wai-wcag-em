## Appendices

### Background reading {#reading}

The information below, related to accessibility essentials, evaluation, and WCAG 2 is important for using this methodology. Evaluators using this methodology are expected to be deeply familiar with all the listed resources:

#### Web Accessibility Essentials

The following documents introduce the essential components of accessibility and explain how people with disabilities use the Web. They are critical for understanding the broader context of accessibility evaluation:

* [Essential Components of Web Accessibility](https://www.w3.org/WAI/fundamentals/components/)
* [How People with Disabilities Use the Web](https://www.w3.org/WAI/people-use-web/)

#### Evaluating Digital Products for Accessibility

These are particularly important resources that outline different approaches for evaluating digital products for accessibility:

* [Easy Checks - A First Review of Web Accessibility](https://www.w3.org/WAI/test-evaluate/easy-checks/)
* [Involving Users in Web Accessibility Evaluation](https://www.w3.org/WAI/test-evaluate/involving-users/)
* [Selecting Web Accessibility Evaluation Tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
* [Using Combined Expertise to Evaluate Web Accessibility](https://www.w3.org/WAI/test-evaluate/combined-expertise/)

#### Web Content Accessibility Guidelines (WCAG) 2

This is the internationally recognized standard explaining how to make web content more accessible to people with disabilities. The following resources are particularly important for accessibility evaluation of digital products:

* [WCAG 2 Overview](https://www.w3.org/WAI/standards-guidelines/wcag/)
* [WCAG 2.2 Technical Specification](https://www.w3.org/TR/WCAG22)
* [How to Meet WCAG 2 (Quick Reference)](https://www.w3.org/WAI/WCAG22/quickref/)
* [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/)
* [Techniques for WCAG 2.2](https://www.w3.org/WAI/WCAG22/Techniques/)

#### ICT Accessibility
* [Guidance on Applying WCAG 2.2 to Mobile Applications (WCAG2Mobile)](https://www.w3.org/TR/wcag2mobile-22/)
* [Guidance on Applying WCAG 2 to Non-Web Information and Communications Technologies (WCAG2ICT)](https://www.w3.org/TR/wcag2ict-22/)

#### Other Standards which incorporate WCAG 2 by reference 

* [Section 508 of the Rehabilitation Act](https://www.access-board.gov/ict/)
* [EN 301 549 (PDF)](https://www.etsi.org/deliver/etsi_en/301500_301599/301549/03.02.01_60/en_301549v030201p.pdf)
 

### Glossary

For the purposes of this document, the following terms and definitions apply:

<dl>
<dt id="complete">Complete processes</dt>
<dd> Based on <a href="https://www.w3.org/TR/WCAG22/#cc3">WCAG 2.2 Conformance Requirement for Complete Processes</a>: 

When a <a href="#view">view</a> is one of a series of views presenting a process (i.e., a sequence of steps that need to be completed in order to accomplish an activity), all views in the process conform at the specified level or better. (Conformance is not possible at a particular level if any page in the process does not conform at that level or better.)</dd>

<dt id="conformance">Conformance</dt>
<dd>From <a href="https://www.w3.org/TR/WCAG/#dfn-conform">WCAG 2.2 definition for "conformance"</a>:  
<blockquote>Satisfying all the requirements of a given standard, guideline or specification.</blockquote></dd>

<dt id="common">Common views</dt>
<dd>Views and different states that are relevant to the entire digital product. This includes the home, login, and other entry points, and, where applicable, contacts, help, legal information, and similar views that are typically linked from all other views (usually from the header, footer, or navigation menu).

**Note:** A definition for [views](#view) is provided below.</dd>

<dt id="developer">Developer</dt>
<dd>The person, team of people, organization, in-house department, or other entity that is involved in the  development process including but not limited to content authors, designers, front-end developers, back-end programmers, quality assurance testers, and project managers.</dd>

<dt id="digital-product">Digital product</dt>
<dd>A coherent collection of one or more related views that together provide common use or functionality. It includes Web sites, web apps, e-books, kiosk apps, mobile apps and documents (PDF, Word) etc.

**Note:** The focus of this methodology is on full, self-enclosed digital products. Digital products may be composed of smaller subsets of views, each of which can be considered to be an individual product. For example, a digital product may include an online shop, an area for each department within the organization, a blog area, and other areas that may each be considered to be a digital product.</dd>

<dt id="functionality">Essential functionality</dt>
<dd>Functionality of a digital product that, if removed, fundamentally changes the use or purpose of the product for users. This includes information that users of a product refer to and tasks that they carry out to perform this functionality.

**Note:** Examples of essential functionality include “selecting and purchasing an item from an online shop”, “completing and submitting a form provided in an application”, and “registering for an account on the kiosk”.

**Note:** Other functionality is not excluded from the scope of evaluation. The term “essential functionality” is intended to help identify critical samples and include them among others in an evaluation.</dd>

<dt id="evaluator">Evaluator</dt>
<dd>The person, team of people, organization, in-house department, or other entity responsible for carrying out the evaluation.</dd>

<dt id="commissioner">Evaluation commissioner</dt>
<dd>The person, team of people, organization, in-house department, or other entity that commissioned the evaluation.

**Note:** In many cases the evaluation commissioner may be the product owner or product developer, in other cases it may be another entity such as a procurer or an accessibility monitoring survey owner.</dd>

<dt id="relied">Relied upon (Technologies)</dt>

<dd>From <a href="https://www.w3.org/TR/WCAG22/#dfn-reliedupon">WCAG 2.2 definition for "relied upon"</a>:  
<blockquote>The content would not conform if that technology is turned off or is not supported.</blockquote></dd>

<dt id="sample">Sample</dt>
<dd>The entirety of a web page, document page, app screen, or a subset of the aformentioned.</dd>

<dt id="template">Templates</dt>

<dd>From <a href="https://www.w3.org/TR/ATAG20/#def-Template">ATAG 2.0 definition for "templates"</a>:  
<blockquote>Content patterns that are filled in by authors or the authoring tool to produce web content for end users (e.g., document templates, content management templates, presentation themes). Often templates will pre-specify at least some authoring decisions.</blockquote></dd>

<dt id="owner">Owner</dt>
<dd>The person, team of people, organization, in-house department, or other entity that is responsible for the digital product.</dd>

<dt id="view">View</dt>
<dd>From WCAG 3 developing definition:  
<blockquote>The content that is actively available in a viewport, including that which can be scrolled or panned to, and any additional content that is included by expansion, while leaving the rest of the content in the viewport actively available.</blockquote></dd>

<dt id="webpage">Web page</dt>
<dd>From <a href="https://www.w3.org/TR/WCAG22/#dfn-webpage">WCAG 2.2 definition for "web page"</a>:  
<blockquote>A non-embedded resource obtained from a single URI using HTTP plus any other resources that are used in the rendering or intended to be rendered together with it by a user agent.</blockquote></dd>
</dl>


### Contributors

Past and present active participants of the [WCAG 2.0 Evaluation Methodology Task Force (Eval TF)](https://www.w3.org/WAI/ER/2011/eval/eval-tf) include: Shadi Abou-Zahra; Frederick Boland; Denis Boudreau; Amy Chen; Vivienne Conway; Bim Egan; Michael Elledge; Gavin Evans; Wilco Fiers; Detlev Fischer; Elizabeth Fong; Vincent François; Alistair Garrison; Emmanuelle Gutiérrez y Restrepo; Katie Haritos-Shea; Martijn Houtepen; Peter Korn; Maureen Kraft; Aurelien Levy; David MacDonald; Mary Jo Mueller; Donald Raikes; Corominas Ramon; Roberto Scano; Samuel Sirois; Sarah J Swierenga; Eric Velleman; Konstantinos Votis; Kathleen Wahlbin; Elle Waters; Richard Warren; Léonie Watson.

### References

<dl>
  <dt>ATAG20</dt>
  <dd>Richards J, Spellman J, Treviranus J, eds (2013). Authoring Tool Accessibility Guidelines 2.0. W3C. Available at: <a href="https://www.w3.org/TR/ATAG20/">https://www.w3.org/TR/ATAG20/</a></dd>
  <dt>Easy Checks</dt>
  <dd>Lawton Henry S, ed (2014). Easy Checks - A First Review of Web Accessibility. W3C. Available at: <a href="https://www.w3.org/WAI/eval/preliminary">https://www.w3.org/WAI/eval/preliminary</a></dd>
  <dt>Essential Components of Web Accessibility</dt>
  <dd>Lawton Henry S, ed (2005). Essential Components of Web Accessibility. Version 1.3. W3C. Available at: <a href="https://www.w3.org/WAI/fundamentals/components/">https://www.w3.org/WAI/fundamentals/components/</a></dd>
  <dt>How People with Disabilities Use the Web</dt>
  <dd>Abou-Zahra S, ed (2012). How People with Disabilities Use the Web. Draft. W3C. Available at: <a href="https://www.w3.org/WAI/people-use-web/">https://www.w3.org/WAI/people-use-web/</a></dd>
  <dt>Involving Users in Evaluating Web Accessibility</dt>
  <dd>Lawton Henry S, ed (2010). Involving Users in Evaluating Web Accessibility. W3C. Available at: <a href="https://www.w3.org/WAI/test-evaluate/involving-users/">https://www.w3.org/WAI/test-evaluate/involving-users/</a></dd>
  <dt>Selecting Web Accessibility Evaluation Tools</dt>
  <dd>Abou-Zahra S, ed (2005). Selecting Web Accessibility Evaluation Tools. W3C. Available at: <a href="https://www.w3.org/WAI/test-evaluate/tools/selecting/">https://www.w3.org/WAI/test-evaluate/tools/selecting/</a></dd>
  <dt>Using Combined Expertise to Evaluate Web Accessibility</dt>
  <dd>Brewer J, ed (2002). Using Combined Expertise to Evaluate Web Accessibility. W3C. Available at: <a href="https://www.w3.org/WAI/test-evaluate/combined-expertise/">https://www.w3.org/WAI/test-evaluate/combined-expertise/</a></dd>
  <dt>UWEM</dt>
  <dd>Velleman E.M, Velasco C.A, Snaprud M, eds (2007). D-WAB4 Unified Web Evaluation Methodology (UWEM 1.2 Core). Wabcluster. Available at: <a href="https://link.springer.com/chapter/10.1007/978-3-540-73283-9_21/">https://link.springer.com/chapter/10.1007/978-3-540-73283-9_21</a></dd>
  <dt>WCAG Overview</dt>
  <dd>Lawton Henry S, ed (2012). Web Content Accessibility Guidelines (WCAG) Overview. W3C. Available at: <a href="https://www.w3.org/WAI/standards-guidelines/wcag/">https://www.w3.org/WAI/standards-guidelines/wcag/</a></dd>
  <dt>WCAG22</dt>
  <dd>Campbell A, Adams C, Montgomery RB, Cooper M, eds (2024). Web Content Accessibility Guidelines 2.2. W3C. Available at: <a href="https://www.w3.org/TR/WCAG22/">https://www.w3.org/TR/WCAG22/</a></dd>
  <dt>WCAG22-TECHS</dt>
  <dd>Campbell A, Adams C, Montgomery RB, Cooper M, eds (2025). Techniques and Failures for Web Content Accessibility Guidelines 2.2. W3C. Available at: <a href="https://www.w3.org/WAI/WCAG22/Techniques/">https://www.w3.org/WAI/WCAG22/Techniques/</a></dd>
  <dt>Understanding-WCAG22</dt>
  <dd>Campbell A, Adams C, Montgomery RB, Cooper M, eds (2025). Understanding WCAG 2.2 - A guide to understanding and implementing Web Content Accessibility Guidelines 2.2. W3C. Available at: <a href="https://www.w3.org/WAI/WCAG22/Understanding/">https://www.w3.org/WAI/WCAG22/Understanding/</a></dd>
</dl>