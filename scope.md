## Scope of Applicability {#applicability}

This methodology is designed to evaluate full, self-enclosed [digital-products](#digital-product), such as websites. In [Step 1.a](#step1a), evaluators define what is in scope exactly. 

### Principle of Product Enclosure

When we define a target product for evaluation, it is essential that we consider all views, states and functionality within the scope of this definition for evaluation. Excluding such parts of a digital product from the scope would likely conflict with the WCAG 2.2 conformance requirements for [full pages](https://www.w3.org/TR/WCAG22/#cc2) and [complete processes](https://www.w3.org/TR/WCAG22/#cc3), or otherwise distort the evaluation results.

#### Example of Product Enclosure

![Diagram of a University Website explained in the following paragraph.](website.png)

The preceding diagram shows a university website comprised of distinct areas; "Information for Students", "Information for Lecturers", "Courseware Application", and "Library Application". The "Courseware Application" includes "Physics Courses", "Medical Courses", and "History Courses" that are aggregated into the application. The university website also has individual web pages such as legal notices, sitemap, and other web pages that are common to all areas.

In the preceding example, if the university website in its entirety is defined as the target for evaluation, then all of the depicted areas are within the scope of the evaluation. This includes any aggregated and embedded content such as maps of the campus, forms for online payments, and discussion boards, including when such parts originate from third-party sources. If only a specific website area, such as the "Courseware Application", is defined as the target for evaluation then all the parts of this area are within the scope of the evaluation. In this case, the scope of evaluation would include all depicted courses, as well as the individual web pages that are common to all areas of the university. See also the definition for [common views](#common).

### Particular Types of Digital Products

This methodology is applicable to a broad variety of digital products. The following provides considerations for particular situations. 

<div class="note">This is not an exhaustive list.</div>

<dl>

<dt>Websites</dt>
<dd>Websites exist in many sizes, anywhere from just the one page to collections of thousands or more. Websites with many pages can use the <a href="#step3">sampling procedure</a> to select a representative sample. On websites with a few pages, all pages can be evaluated and the <a href="#step3">sampling procedure</a> can be skipped. </dd>

<dt>Web applications</dt>
<dd>Web applications generally contain a lot of dynamically generated content and functionality. They tend to be more complex and interactive. Therefore, they typically require more time and effort to evaluate, and will typically need a larger sample set. Some examples of web applications include web-based email clients, document editors, video sharing platforms, social media sites and booking platforms.

<dt>Native applications</dt>
<dd>For native applications, no list of URLs can be generated to base a representative sample on. Instead, samples can be identified with unique screenshots and/or descriptions of the path that lead to the specific sample.</dd>

<dt>Kiosks</dt>
<dd>TBD</dd>

<dt>Document</dt>
<dd>TBD</dd>

<dt>Set-top box interfaces</dt>
<dd>TBD</dd>
</dl>

### Particular Evaluation Contexts

This methodology can be applied in different situations and contexts. The following considerations apply to particular situations and contexts for an evaluation:

<dl>

<dt>Self-Assessment of Conformance</dt>
<dd>In-house evaluators and evaluators who are part of the development process often have easier access to the developers and maintainers of the digital product, the development and hosting environments, the authoring tools, and the materials used for development and maintenance. Particularly use cases, design analysis, technical specifications and documentation, and testing resources can make evaluation more effective and should be leveraged where possible.</dd>

<dt>Third-Party Assessment of Conformance</dt>
<dd>Independent external evaluators typically have less information about the websites internal software, areas, and functionality of a website as they have not been involved in its procurement and in how the website was designed and developed. Often evaluators in these situations need to contact the product's owner or developer to get necessary information that make the evaluation more effective.</dd>

<dt>Evaluating During Development</dt>
<dd>While this methodology has been primarily designed for reviewing digital products that are already developed, it is critical to evaluate accessibility throughout the design and implementation stages of a digital product to ensure its conformance. The guidance provided in this methodology can be useful during these earlier stages of the design and development process, though some adaptation may be needed. However, it is important to be aware that evaluations carried out during these earlier stages can quickly become obsolete by implementing even minor changes. Consequently evaluations carried out during these stages should not be used for making statements nor conformance claims about the finalized digital product.</dd>

<dt>Evaluating Composite Digital Products</dt>
<dd>When evaluating digital products with <a href="#separable">separable areas</a>, such as an e-commerce section, blog section, or other sub-sites, it can be useful to first evaluate each area separately according to this methodology, followed by an overall evaluation with samples from each product area and any common views. This would ensure more complete coverage of the digital product in its entirety as well as provide insights about how each area performed, which may differ from one area to another.</dd>

<dt>Evaluating Aggregated Digital Products</dt>
<dd>Digital products that are generated using content that is combined from different sources, such as portals with portlets, are usually much more challenging to evaluate because of the many different content instances that can be generated. Generally it is not possible to evaluate the content from their sources separately, but rather as displayed to the users when they are combined.</dd>

<dt>Evaluating Third-Party Content</dt>
<dd>Digital products do not control third-party content, like comments on a social media website or review aggregator. WCAG 2 provides specific considerations for the conformance of such type of content in the section <a href="https://www.w3.org/TR/WCAG22/#conformance-partial">Statement of Partial Conformance</a>. In such cases evaluators will need to determine whether such content is regularly monitored and repaired (within two business days), and whether non-conforming content is clearly identified as such in all the web pages in which it appears.</dd>

<dt>Re-Running Product Evaluation</dt>
<dd>Evaluation, according to this methodology, may be re-run after a short period; for example, when issues are identified and repaired by the product's owner or developer, or periodically to monitor progress. In such cases the evaluation can be carried out using a sample that includes:

* A sub-set of the samples that were used in the preceding evaluation to facilitate comparability between the results;
* A replaced sub-set of samples from those that were used in the preceding evaluation to improve view coverage;

Unless significant changes were made to the digital product, there is usually no need to change the size of the selected sample nor the approach used for sampling. The amount of replaced samples in a fresh sample set is typically about half of the initial sample set, though this could be increased when views of a digital product mostly conform to WCAG 2.</dd>

<dt>Large-Scale Evaluation</dt>
<dd>Carrying out mass evaluation of many digital products, for example for national or international surveying, is typically carried out by primarily using automated evaluation tools. Relatively few views undergo full manual inspection. Such evaluations do not usually address the necessary qualitative depth of conformance review per product for which this methodology is designed.</dd>
</dl>