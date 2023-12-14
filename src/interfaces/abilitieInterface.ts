interface NamedResource {
    name: string;
    url: string;
}

interface FlavorText {
    flavor_text: string;
    language: NamedResource;
    version_group: NamedResource;
}

export interface AbilityInterface {
    name: string;
    flavor_text_entries: FlavorText[];
    generation: NamedResource[];
}
