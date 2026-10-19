// Interactive Subnet Calculator Demo function inside portfolio
function runSubnetDemo() {
    let ip = prompt("Enter an IPv4 address (e.g., 192.168.1.1):", "192.168.1.1");
    if (ip) {
        let parts = ip.split('.');
        if (parts.length === 4 && parts.every(p => !isNaN(p) && p >= 0 && p <= 255)) {
            let firstOctet = parseInt(parts[0]);
            let ipClass = '';
            
            if (firstOctet >= 1 && firstOctet <= 126) ipClass = 'Class A';
            else if (firstOctet >= 128 && firstOctet <= 191) ipClass = 'Class B';
            else if (firstOctet >= 192 && firstOctet <= 223) ipClass = 'Class C';
            else ipClass = 'Class D/E (Special)';

            alert(`IP Address: ${ip}\nDetected Class: ${ipClass}\nStatus: Valid IPv4 Address!`);
        } else {
            alert("Invalid IPv4 address format. Please enter four numbers (0-255) separated by dots.");
        }
    }
}

// Add smooth Entrance Animation when scrolling into view
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.glass-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});