const institutions = {
    "Academy for Jewish Religion": "librarian@ajr.edu",
    "Advent Christian Ministry Training Institute": "drichards@mtiprogram.com",
    "Arab Baptist Theological Seminary": "Seid@abtslebanon.org",
    "BSK Theological Seminary": "ryan.shrauner@bsk.edu",
    "Berkshire Christian College": "berkshireprez@gmail.com",
    "Biblical Graduate School of Theology": "janice@bgst.edu.sg",
    "Bristol Baptist College": "library@bristol-baptist.ac.uk",
    "Canadian Reformed Theological Seminary": "malkema@crts.ca",
    "Central Baptist Theological Seminary": "cjohnson@cbts.edu",
    "Claremont School of Theology": "mfroelich@cst.edu",
    "Cliff College": "Librarian@cliffcollege.ac.uk",
    "Denver Seminary": "matt.wasielewski@denverseminary.edu",
    "East Asia School of Theology": "benson@east.edu.sg",
    "Family of Faith Christian Univ. /Global Awakening Theol. Sem": "mhaeflinger@familyoffaith.edu",
    "Franciscan School of Theology": "byoung@fst.edu",
    "GBHEM Learning Resource": "tlowery@gbhem.org",
    "Gordon-Conwell Theological Seminary": "drichards@gordonconwell.edu",
    "Hartford International University Library": "kgrafton@hartfordinternational.edu",
    "Horizon College and Seminary": "library@horizon.edu",
    "International Baptist Theological Centre of Amsterdam": "katharina@ibts.eu",
    "Kairos University": "sheavenor@kairos.edu",
    "Kingswood University": "sabinev@kingswood.edu",
    "Lexington Theological Seminary": "dyilibuw@lextheo.edu",
    "McMaster Divinity College": "bodamar@mcmaster.ca",
    "New Brunswick Theological Seminary": "pmilas@nbts.edu",
    "New School of Biblical Theology": "ochaparro@nsbt.org",
    "Northwind Seminary": "carl@northwindinstitute.org",
    "Norwegian School of Leadership and Theology": "kara.lamhauge.tangen@hlt.no",
    "Reformed Theological College": "cwakefield@rtc.edu.au",
    "St. Athanasius & St. Cyril Coptic Orthodox Theol. School": "grace.selim@acts.school",
    "Horizon College & Saskatoon Theological Union": "leif.steiestol@saskatoontheologicalunion.ca",
    "School of Applied Leadership for Transformation": "ronw@ilc.global",
    "Scottish Baptist College": "Ellie.Bell@uws.ac.uk",
    "Singapore Bible College": "mgr.lib@sbc.edu.sg",
    "United Theological Seminary": "kscochrane@united.edu",
    "Universidad iberoamericana de liderazgo (UNILID)": "ronw@ilc.global",
    "Wartburg Theological Seminary": "eraber@wartburgseminary.edu",
    "Winebrenner Theological Seminary": "mjohnson@winebrenner.edu"
};

// Populate dropdown list with institutions
window.onload = function() {
    const select = document.getElementById('institutions');
    for (const institution in institutions) {
        let option = document.createElement('option');
        option.value = institution;
        option.text = institution;
        select.appendChild(option);
    }
};

// Display the selected institution's contact email
function showEmail() {
    const select = document.getElementById('institutions');
    const email = institutions[select.value];
    document.getElementById('contactEmail').textContent = `Contact email: ${email}`;
}
