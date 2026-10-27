function calculateMatch() {
    
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');
    const q6 = document.querySelector('input[name="q6"]:checked');
    const q7 = document.querySelector('input[name="q7"]:checked');
    const q8 = document.querySelector('input[name="q8"]:checked');
    const q9 = document.querySelector('input[name="q9"]:checked');
    const q10 = document.querySelector('input[name="q10"]:checked');


    if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
        alert("Please answer all questions before submitting!");
        return;
    }

    const resultDiv = document.getElementById("match-result");
    
    
    let matches = [];

    if (q6.value === "stem" && q4.value === "dreamer") {
        matches.push({
            figure: "Mae Jemison",
            description: "You are a stellar trailblazer who looks past earthly boundaries to reach the cosmos with grace and brilliance.",
            playlist: "Soundtrack: Limitless Skies & Starlight Ambition"
        });
    }

    if (q6.value === "stem" && q7.value === "logic") {
        matches.push({
            figure: "Katherine Johnson, Dorothy Vaughan, & Mary Jackson (Hidden Figures)",
            description: "Your mathematical precision, unshakeable focus, and pioneering intellect calculate the trajectory for future generations.",
            playlist: "Soundtrack: Orbital Mechanics & Brilliance"
        });
    }

    if (q9.value === "excel" || q8.value === "cosmos") {
        matches.push({
            figure: "Christine Darden",
            description: "You are a master of aerodynamics and high-level engineering, breaking barriers with quiet, undeniable excellence.",
            playlist: "Soundtrack: Supersonic Focus & Dedication"
        });
    }

    if (q4.value === "writer" || q7.value === "poetry") {
        matches.push({
            figure: "Maya Angelou & Langston Hughes",
            description: "Your words carry the rhythm of history, strength, and deep artistic soul, inspiring healing and power through literature.",
            playlist: "Soundtrack: Harlem Renaissance & Poetic Resonance"
        });
    }

    if (q10.value === "bird" || q3.value === "remember") {
        matches.push({
            figure: "Zora Neale Hurston & Toni Morrison",
            description: "You possess a profound gift for storytelling, capturing the unfiltered essence, folklore, and triumph of our culture.",
            playlist: "Soundtrack: Ancestral Stories & Literary Soul"
        });
    }

    if (q8.value === "stage") {
        matches.push({
            figure: "August Wilson",
            description: "You capture the monumental depth of everyday Black life, turning ordinary conversations into timeless American masterpieces.",
            playlist: "Soundtrack: Century Cycle & Blues Rhythms"
        });
    }

    if (q1.value === "leader" && q10.value === "dream") {
        matches.push({
            figure: "Dr. Martin Luther King Jr.",
            description: "You carry a visionary commitment to justice, equity, and moral leadership, moving people together with eloquence and courage.",
            playlist: "Soundtrack: March on Washington & Beloved Community"
        });
    }

    if (q5.value === "resilient" && q6.value === "activism") {
        matches.push({
            figure: "Ruby Bridges",
            description: "You walk forward with youthful courage and unwavering poise, paving safe roads where others can follow without fear.",
            playlist: "Soundtrack: Courageous First Steps & Grace"
        });
    }

    if (q1.value === "pioneer") {
        matches.push({
            figure: "Bessie Coleman",
            description: "You are a fearless trailblazer who refuses to let boundaries stop you from soaring to new heights.",
            playlist: "Soundtrack: Limitless Skies & Ambition"
        });
    }

    // Fallback if no specific rule matched
    if (matches.length === 0) {
        matches.push({
            figure: "W.E.B. DuBois & Claudette Colvin",
            description: "You value deep intellect, historical truth, unyielding courage, and using your voice to uplift the community.",
            playlist: "Soundtrack: Renaissance Mind & Resistance Soul"
        });
    }

   
    let resultsHTML = "<h3>Your Ancestral Matches:</h3>";
    
    matches.forEach(match => {
        resultsHTML += `
            <div style="margin-bottom: 20px; border-bottom: 1px solid #444; padding-bottom: 15px;">
                <h4 style="color: #ffffff; font-size: 1.2rem;">✨ ${match.figure}</h4>
                <p>${match.description}</p>
                <p><strong>${match.playlist}</strong></p>
            </div>
        `;
    });

    resultDiv.style.display = "block";
    resultDiv.innerHTML = resultsHTML;
}