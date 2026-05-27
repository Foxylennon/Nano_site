export const tutorialsData = [
  {
    category: 'The good guys',
    items: [
      {
        id: 'surgeon',
        title: 'Surgeons',
        content: `# The surgeons

### Description

The surgeon is the main protagonist of Nano, the character you control as a player. A member of the medical staff at **Hospital 67**, the surgeon holds a **Licence-level diploma** and is trained to perform delicate internal operations.

There are **four surgeons** in total who participate together in the same operation, working as a team to eliminate diseases and save the patient.

### Equipment

- **Default Weapon:** Scissors  
  The surgeon's basic surgical tool, used to cut through diseases and clear the path inside the body.`
      },
      {
        id: 'movement',
        title: 'Bouger le chirurgien',
        content: `# Chrom
        
Chrom is a mysterious merchant who originates from **within the patient's body itself**. He appears only after you have saved him during the operation.

Once rescued, Chrom sets up shop inside the body and offers various products to help the surgeon in the mission.

### Merchandise

Chrom sells:

- **Proteins** – resources that can be used to heal or upgrade the surgeon  
- **Other surgical weapons** – stronger tools to replace or complement the basic scissors

Chrom is a key ally for progression, as his shop gives the surgeon access to better equipment as you advance through the operation.
`
      }
    ]
  },
  {
    category: 'Diseases',
    items: [
      {
        id: 'mob-tumor',
        title: 'Tumors',
        content: `# Disease : Tumor

## Description

One of the common diseases we can encounter in the body. Cells somehow decided to become rebel towards the patient's health.

## Behavior

Tumors are hostile as they can destroy anything in their sight. Whenever a surgeon approaches nearby, the tumor charges forward to slap them.

`
      },
      {
        id: 'mob-bacteria',
        title: 'Bacterias',
        content: `# Disease : Bacteria

## Description

Bacteria are single-celled organisms that multiply rapidly inside the body. Left unchecked, they can quickly overwhelm the surgeon with their sheer numbers.

## Behavior

Bacteria are not particularly strong, but they compensate with reproduction. When a bacterium takes damage or after a certain time, it splits into two smaller bacteria. The more time you spend fighting them, the more numerous they become. Kill them quickly before they multiply out of control.

`
      },{
        id: 'mob-virus',
        title: 'Viruses',
        content: `# Disease : Virus

## Description

Virus particles are sneaky enemies that do not attack the surgeon directly. Instead, they support other diseases by healing them, making the battlefield much more dangerous.

## Behavior

Virus are non-aggressive toward the surgeon and will avoid direct confrontation. However, whenever a tumor, bacterium, or clot is nearby, the virus will move toward it and restore its health. Prioritize eliminating viruses first, otherwise your fights against other diseases will feel endless.

`
      },{
        id: 'mob-caillot',
        title: 'Clots',
        content: `# Disease : Clot

## Description

Blood clots are dense, hardened masses that form inside the vessel. They act like living shields for other diseases and are extremely difficult to destroy.

## Behavior

Clots are slow but very tough. They take significantly more damage to destroy compared to other diseases and can block your path. Their thick structure also makes them resistant to certain attacks. You must focus fire and be patient when dealing with clots, as they will not go down easily.

`
      }
    ]
  },
  {
    category: 'Chrom\'s bazar',
    items: [
      {
        id: 'settings',
        title: 'Proteins',
        content: `# protein
        `
      }
    ]
  },
  {
    category: 'Story',
    items: [
      {
        id: 'lore',
        title: 'Nano universe',
        content: `# GStory blablablek
        `
      }
    ]
  }
];
