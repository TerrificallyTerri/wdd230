const membersContainer = document.querySelector(".members");
membersContainer.innerHTML = "";
const membersJson = 'data/members.json';

async function getMemberData() {
    try {
        const response = await fetch(membersJson);
        const data = await response.json();
        // console.table(data.members);

        const verifiedMembers = data.members.filter(member =>
            member.membership_level === 'Silver' || member.membership_level === 'Gold'
        );

        const shuffled = verifiedMembers.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 2);
    } catch (error) {
        console.error('Error fetching data: ', error);
    }
}

async function displayMembers() {
    const randomMembers = await getMemberData();
    if (randomMembers) {
        randomMembers.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.classList.add('member');

            memberDiv.innerHTML = `
            <h3>${member.name}</h3>
            <img src="${member.image}" alt="${member.name} logo" width="200">
            <p>Membership Level: ${member.membership_level}</p>
            <p>${member.other_info.split('.')[0] + '.'}</p>
            <a href="${member.website}" target="_blank">Website: "${member.website}"</a>
            `;
            membersContainer.appendChild(memberDiv);
        });
    }
}

displayMembers();