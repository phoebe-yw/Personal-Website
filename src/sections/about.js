export default function about() {
  return /* html */`
    <section class="section section--about" aria-label="About Phoebe Wang">

      <div class="about-header">
        <div class="avatar" aria-label="Phoebe Wang initials">PW</div>
        <div>
          <h1 class="about-name">Phoebe Wang</h1>
          <p class="about-role">cs student &middot; pm intern @ ibm &middot; robotics researcher</p>
        </div>
      </div>

      <p class="body-text">
        Hi! I'm a Computer Science student at UT Austin (Class of 2028), passionate about
        building things where technology meets people. I'm currently interning at IBM in Lowell, MA
        as a Product Manager Intern on the Guardium Data Protection team. I previously researched
        robot learning at UT's RobIn lab, serve as ACM's Marketing Junior Officer, and love dancing,
        playing piano, and making short-form content in my free time.
      </p>

      <div class="chips" style="margin-top: 14px;">
        <span class="chip">product management</span>
        <span class="chip">robotics &amp; ml</span>
        <span class="chip">ai strategy</span>

        <span class="chip">cybersecurity</span>
      </div>

      <div style="margin-top: 20px; border-top: 1px solid var(--divider); padding-top: 14px;">
        <p class="entry-org">The University of Texas at Austin</p>
        <p class="entry-role">b.s. computer science &middot; graduating may 2028</p>
        <p class="body-text text-muted" style="margin-top: 6px; font-size: 0.70rem;">
          data structures &amp; algorithms &middot; computer org &amp; architecture &middot; operating systems &middot;
          probability &amp; statistics &middot; linear algebra
        </p>
      </div>

      <div style="margin-top: 18px; border-top: 1px solid var(--divider); padding-top: 14px;">
        <p class="skills-group-label" style="margin-bottom: 8px;">honors &amp; awards</p>
        <ul class="entry-bullets">
          <li>UT for Me: Dell Scholar — full-tuition scholarship recipient</li>
          <li>NCWIT Aspirations in Computing — Houston Affiliate Winner</li>
          <li>Pinterest Engage Program — selected mentee, paired with Pinterest AI Platform engineer</li>
        </ul>
      </div>

    </section>
  `
}
