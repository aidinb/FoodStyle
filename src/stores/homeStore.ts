import {action, computed, makeObservable, observable} from 'mobx';
import {getCategories} from '../utils/api';

interface Category {
  id: number;
  name: string;
  level: number;
  parentId: number | null;
  position: number;
  imagePath: string | null;
}

class HomeStore {
  allCategories: Category[] = [];
  categories: Category[] = [];
  categoriesLoading = false;
  level = 1;
  activeCat: number | null = null;
  activeParent: number | null = null;
  activeFilters: string[] = [];

  constructor() {
    makeObservable(this, {
      allCategories: observable,
      categories: observable,
      categoriesLoading: observable,
      level: observable,
      activeCat: observable,
      activeParent: observable,
      activeFilters: observable,
      getAllCategories: action,
      intermediateCat: computed,
      setAllCategories: action,
      setCategories: action,
      setActiveCat: action,
      setActiveParent: action,
      setActiveCatParam: action,
      sortedCat: computed,
      numColumn: computed,
      activeCatImage: computed,
      activeCatName: computed,
      filters: computed,
      setActiveFilters: action,
      setLevel: action,
      backStep: action,
      getFilterStatus: action,
    });
  }

  setCategories = (categories: Category[]) => {
    this.categories = categories;
  };

  setActiveParent = (parentId: number) => {
    this.activeParent = parentId;
  };

  setAllCategories = (categories: Category[]) => {
    this.allCategories = categories;
  };

  setLevel = (level: number) => {
    this.level = level;
  };

  getAllCategories = async () => {
    try {
      const categories = await getCategories();
      this.setAllCategories(categories);
      this.setCategories(this.intermediateCat);
    } catch (error) {
      console.error('Failed to fetch categories', error);
    }
  };

  get intermediateCat() {
    return this.allCategories.filter(
      category =>
        category.level === this.level && this.activeCat === category.parentId,
    );
  }

  get sortedCat() {
    const sortedData = this.categories
      .slice()
      .sort((a, b) => a.position - b.position);
    const oddItems = sortedData.filter((_, index) => (index + 1) % 2 !== 0);
    const evenItems = sortedData.filter((_, index) => (index + 1) % 2 === 0);
    return [...oddItems, ...evenItems];
  }

  setActiveCatParam = (cat: number | null) => {
    this.activeCat = cat;
  };

  setActiveCat = (rootCatId: number, parentId: number) => {
    this.setActiveCatParam(rootCatId);
    this.setActiveParent(parentId);
    this.level++;
    this.setCategories(this.intermediateCat);
  };

  get numColumn() {
    return Math.ceil(this.sortedCat.length / 2);
  }

  resetToRoot = () => {
    this.setActiveCatParam(null);
    this.setLevel(1);
    this.setCategories(this.intermediateCat);
  };

  backStep = () => {
    if (this.level === 2) {
      this.setActiveCatParam(null);
      this.setLevel(1);
    } else {
      this.setActiveCatParam(this.activeParent);
      this.setLevel(this.level - 1);
    }
    this.setCategories(this.intermediateCat);
  };

  get activeCatName() {
    const activeCat = this.allCategories.find(
      item => item.id === this.activeCat,
    );
    return activeCat ? activeCat.name : 'Cuisines';
  }

  get activeCatImage() {
    const activeCat = this.allCategories.find(
      item => item.id === this.activeCat,
    );
    return activeCat ? activeCat.imagePath : null;
  }

  setActiveFilters = (filter: string) => {
    if (this.activeFilters.includes(filter)) {
      this.activeFilters = this.activeFilters.filter(f => f !== filter);
    } else {
      this.activeFilters.push(filter);
    }
  };

  getFilterStatus(filter: string) {
    return this.activeFilters.includes(filter);
  }

  get filters() {
    return ['ANYTIME', 'ANY PRICE', 'ANY RATING', 'ALL'];
  }
}

export default HomeStore;
