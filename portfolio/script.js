// Add class 'in-view' to .skills when it enters the viewport
document.addEventListener('DOMContentLoaded', function () {
	const skillsSection = document.querySelector('.skills');
	if (!skillsSection) return;

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				skillsSection.classList.add('in-view');
				obs.unobserve(entry.target); // animate once
			}
		});
	}, { threshold: 0.35 });

	observer.observe(skillsSection);
});
