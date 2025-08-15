## Scope of Applicability {#applicability}

This methodology is designed for evaluating full, self-enclosed [digital-products](#digital-product). That is, for every [view](#view) it is unambiguous whether it is part of the website or not. This includes websites of organizations, entities, persons, events, products, and services.

The exact definition of a target digital product to be evaluated is determined as part of [Step 1.a](#step1a).

### Principle of Product Enclosure

When a target product is defined for evaluation, it is essential that all user interfaces, user interface states, and functionality within the scope of this definition are considered for evaluation. Excluding such aspects of a digital product from the scope of evaluation would likely conflict with the WCAG 2.2 conformance requirements for [full pages](https://www.w3.org/TR/WCAG22/#cc2) and [complete processes](https://www.w3.org/TR/WCAG22/#cc3), or otherwise distort the evaluation results.

#### Example of Product Enclosure

![Diagram of a University Website explained in the following paragraph.](website.png)

The preceding diagram shows a university website comprised of distinct areas; "Information for Students", "Information for Lecturers", "Courseware Application", and "Library Application". The "Courseware Application" includes "Physics Courses", "Medical Courses", and "History Courses" that are aggregated into the application. The university website also has individual web pages such as legal notices, sitemap, and other web pages that are common to all areas.

In the preceding example, if the university website in its entirety is defined as the target for evaluation, then all of the depicted areas are within the scope of the evaluation. This includes any aggregated and embedded content such as maps of the campus, forms for online payments, and discussion boards, including when such parts originate from third-party sources. If only a specific website area, such as the "Courseware Application", is defined as the target for evaluation then all the parts of this area are within the scope of the evaluation. In this case, the scope of evaluation would include all depicted courses, as well as the individual web pages that are common to all areas of the university. See also the definition for [Common Web Pages](#common).

### Particular Types of Digital Products

This methodology is applicable to the broad variety of digital products. The following provides considerations for particular situations, noting that digital products may combine several aspects. Thus the following list is non-exclusive and non-exhaustive:

<dl>

<dt>Small Websites</dt>
<dd>For websites with few web pages the sampling procedure defined in <a href="#step3">Step 3: Select a Representative Sample</a> will likely result in selecting most or all of the web pages from the target website. In cases where all web pages can be evaluated, the sampling procedure can be skipped and the selected sample is considered to be the entire website in the remaining steps.</dd>

<dt>Web Applications</dt>
<dd>Web applications are generally composed of dynamically generated content and functionality (see <a href="#states">web page states</a>). Web applications tend to be more complex and interactive. Some examples of web applications include webmail clients, document editors, and online shops. Web applications may be part of a larger website but can also constitute a website of their own in the context of this methodology. That is, an individual and separable entity for evaluation.

<p class="note">Due to the many possibilities of generating content and functionality in web applications it is sometimes not feasible to exhaustively identify every possible web page, web page state, and functionality. Web applications will typically require more time and effort to evaluate, and they will typically need larger web page samples to reflect the different types of content, functionality, and processes.</p></dd>

<dt>Native applications</dt>
<dd>For native applications, no list of URLs can be generated to base a representative sample on. Instead, samples can be identified with unique screenshots and/or descriptions of the path that lead to the specific sample. In this case, you'll want to ensure <a href="#complete">complete processes</a> are taken into account.</dd>
</dl>

### Particular Evaluation Contexts

This methodology is designed to be flexible to facilitate its applicability in different situations and contexts. The following considerations apply to particular situations and contexts for an evaluation:

<dl>

<dt>Self-Assessment of Conformance</dt>
<dd>In-house evaluators and evaluators who are part of the development process often have easier access to the website developers and maintainers, the development and hosting environments, the authoring tools, and the materials used for development and maintenance. Particularly use cases, design analysis, technical specifications and documentation, and testing resources can make evaluation more effective and should be leveraged where possible.</dd>

<dt>Third-Party Assessment of Conformance</dt>
<dd>Independent external evaluators typically have less information about the websites internal software, areas, and functionality of a website as they have not been involved in its procurement and in how the website was designed and developed. Often evaluators in these situations need to contact the website owner or developer to get necessary information that make the evaluation more effective.</dd>

<dt>Evaluating During Development</dt>
<dd>While this methodology has been primarily designed for reviewing websites that are already developed, it is critical to evaluate accessibility throughout the design and implementation stages of a website to ensure its conformance. The guidance provided in this methodology can be useful during these earlier stages of the design and development process, though some adaptation may be needed. However, it is important to be aware that evaluations carried out during these earlier stages can quickly become obsolete by implementing even minor changes. Consequently evaluations carried out during these stages should not be used for making statements nor conformance claims about the finalized website.</dd>

<dt>Evaluating Composite Websites</dt>
<dd>When evaluating websites with <a href="#separable">separable areas</a>, such as online shop, blog area, and other sub-sites, it can be useful to first evaluate each website area separately according to this methodology, followed by an overall evaluation with samples from each website area and any common web pages. This would ensure more complete coverage of the website in its entirety as well as provide insights about how each website area performed, which may differ from one area to another.</dd>

<dt>Evaluating Aggregated Websites</dt>
<dd>Websites that are generated using content that is combined from different sources, such as portals with portlets, are usually much more challenging to evaluate because of the many different content instances that can be generated. Generally it is not possible to evaluate the content from their sources separately but rather as displayed to the users when they are combined.</dd>

<dt>Evaluating Third-Party Content</dt>
<dd>Third-party content is not under the control of the website or web service providers; for example content generated by website users in an online forum. WCAG 2 provides specific considerations for the conformance of such type of content in section <a href="https://www.w3.org/TR/WCAG22/#conformance-partial">Statement of Partial Conformance</a>. In such cases evaluators will need to determine whether such content is regularly monitored and repaired (within two business days), and whether non-conforming content is clearly identified as such in all the web pages in which it appears.</dd>

<dt>Re-Running Website Evaluation</dt>
<dd>Website evaluation, according to this methodology, may be re-run after a short period; for example, when issues are identified and repaired by the website owner or website developer, or periodically to monitor progress. In such cases the evaluation can be carried out using a sample of web pages that include:

* A sub-set of the web pages that were used in the preceding evaluation to facilitate comparability between the results;
* A replaced sub-set of web pages from those that were used in the preceding evaluation to improve website coverage;

Unless significant changes were made to the website there is usually no need to change the size of the selected web page sample nor the approach used for sampling. The amount of replaced web pages in a fresh sample is typically about half of the initial sample, though this could be increased when web pages on a website mostly conform to WCAG 2.</dd>

<dt>Large-Scale Evaluation</dt>
<dd>Carrying out mass evaluation of many websites, for example for national or international surveying, is typically carried out by primarily using automated evaluation tools. Relatively few web pages undergo full manual inspection. Such evaluations do not usually address the necessary qualitative depth of conformance review per website for which this methodology is designed.</dd>
</dl>