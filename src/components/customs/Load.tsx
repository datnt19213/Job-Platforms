export const isLoadMore = () => {
  return (
    <span className='text-blue-hover pb-1 relative before:content[] before:absolute before:bottom-0 before:w-[65%] before:h-[2px] before:bg-blue-hover hover:before:w-full before:transition-all before:duration-500'>
      Load more
    </span>
  );
}

export const isFullLoaded = () => {
  return (
    <span className='text-destructive'>
      All jobs loaded.
    </span>
  );
}