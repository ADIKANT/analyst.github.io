function setupRevealOnScroll(){const items=Array.from(document.querySelectorAll([".experience-card",".useful-item",".case-card",".technical-project",".process-card",".leader-role-card",".architecture-stage",".speaking-card",".contact-card"].join(", ")));if(items.length===0){return}document.documentElement.classList.add("reveal-ready");items.forEach(item=>item.classList.add("reveal-item"));if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){items.forEach(item=>item.classList.add("is-visible"));return}const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:0.16,rootMargin:"0px 0px -8% 0px"});items.forEach(item=>observer.observe(item))}
setupRevealOnScroll()

async function setupHeadHunterResumeLinks(){const links=Array.from(document.querySelectorAll("[data-hh-resume]"));if(links.length===0){return}try{const paths=["assets/hh/1.txt","assets/hh/2.txt","assets/hh/3.txt","assets/hh/4.txt","assets/hh/5.txt"];const parts=await Promise.all(paths.map(async path=>{const response=await fetch(path,{cache:"force-cache"});return response.ok?response.text():""}));const resumeId=parts.join("").replace(/[^0-9a-f]/gi,"").trim();if(resumeId){links.forEach(link=>{link.href="https://hh.ru/resume/"+resumeId})}}catch(error){return}}
setupHeadHunterResumeLinks()

function setupResumeLinks(){document.querySelectorAll("[data-pdf-resume]").forEach(link=>{link.href="resume.html"})}
setupResumeLinks()
