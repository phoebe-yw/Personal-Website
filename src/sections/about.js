export default function about() {
  return /* html */`
    <section class="section section--about" aria-label="About Phoebe Wang">

      <div class="about-header">
        <div class="avatar" aria-label="Phoebe Wang initials">PW</div>
        <div>
          <h1 class="about-name">Phoebe Wang</h1>
          <p class="about-role">cs student &middot; incoming pm @ ibm &middot; robotics researcher</p>
        </div>
      </div>

      <p class="body-text">
        Hi! I'm a Computer Science student at UT Austin (Class of 2028), passionate about
        building things where technology meets people. This summer I'm headed to IBM in Lowell, MA
        as a Product Manager Intern. I also research robot learning at UT's RobIn lab, is ACM's 
        Marketing Junior Officer, and I love dancing, playing piano, andmaking short-form content 
        in my free time.
      </p>

      <div class="chips" style="margin-top: 14px;">
        <span class="chip">product management</span>
        <span class="chip">robotics &amp; ml</span>
        <span class="chip">ai strategy</span>
        <span class="chip">content creation</span>
        <span class="chip">cybersecurity</span>
      </div>

      <div style="margin-top: 20px; border-top: 1px solid var(--divider); padding-top: 14px;">
        <p class="entry-org">The University of Texas at Austin</p>
        <p class="entry-role">b.s. computer science &middot; gpa 3.3 &middot; graduating may 2028</p>
        <p class="body-text text-muted" style="margin-top: 6px; font-size: 0.70rem;">
          data structures &amp; algorithms &middot; computer org &amp; architecture &middot;
          probability &amp; statistics &middot; linear algebra
        </p>
      </div>

    </section>
  `
}
