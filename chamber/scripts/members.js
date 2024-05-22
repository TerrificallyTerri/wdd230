document.addEventListener('DOMContentLoaded', function () {

    const membersJson = 'data/members.json';
    const listContainer = document.querySelector('ol');

    async function getMemberData() {
        try {
            const response = await fetch(membersJson);
            const data = await response.json();
            displayMembers(data.members);
            console.table(data.members);
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    const displayMembers = (members) => {

        members.forEach(member => {
            // create the elements needed to hold the data
            const listItem = document.createElement('li');
            const name = document.createElement('h3');
            name.setAttribute('class', 'member-name');
            name.textContent = `${member.name}`;

            const address = document.createElement('p');
            address.setAttribute('class', 'address');
            address.textContent = `Address: ${member.address}`;

            const phone = document.createElement('p');
            phone.setAttribute('class', 'phone');
            phone.textContent = `Phone: ${member.phone}`;

            const website = document.createElement('a');
            website.setAttribute('class', 'website');
            website.textContent = `View Webpage`;
            website.href = `${member.website}`;

            const membershipLevel = document.createElement('h4');
            membershipLevel.setAttribute('class', 'membership-level');
            membershipLevel.textContent = `${member.membership_level}`;

            const otherInfo = document.createElement('p');
            otherInfo.setAttribute('class', 'other-info');
            otherInfo.textContent = `${member.other_info}`;

            const memberLogo = document.createElement('img');
            memberLogo.setAttribute('class', 'member-logo');
            memberLogo.setAttribute('src', member.image);
            memberLogo.setAttribute('alt', `Logo of ${member.name}`);
            memberLogo.setAttribute('loading', 'lazy');
            memberLogo.setAttribute('width', '200px');
            memberLogo.setAttribute('height', 'auto');

            // add the elements to the list listItem
            listItem.appendChild(memberLogo);
            listItem.appendChild(name);
            listItem.appendChild(membershipLevel);
            listItem.appendChild(address);
            listItem.appendChild(phone);
            listItem.appendChild(website);
            listItem.appendChild(otherInfo);


            // add the listItem to the listcontainer
            listContainer.appendChild(listItem);
        });

    }
    getMemberData();

    const gridViewButton = document.querySelector('.grid-view-bttn');
    const listViewButton = document.querySelector('.list-view-bttn');

    const list = document.querySelector('ol');

    listViewButton.onclick = function () {
        list.classList.remove('grid-view-filter');
        list.classList.add('list-view-filter');
    }

    gridViewButton.onclick = function () {
        list.classList.remove('list-view-filter');
        list.classList.add('grid-view-filter');
    };

});
