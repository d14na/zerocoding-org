<template>
    <!-- start chat wrapper -->
    <div class="chat-wrapper">

        <!-- start chat sidebar -->
        <div class="chat-sidebar">

            <!-- start sidebar header -->
            <div class="chat-sidebar-header">
                <a href="javascript://" data-toggle="dropdown" class="dropdown-link">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm mg-r-8"><span class="avatar-initial rounded-circle">ZC</span></div>
                        <span class="tx-color-01 tx-semibold">ZeroCoding</span>
                    </div>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
                </a>
                <div class="dropdown-menu dropdown-menu-right">
                    <a href="javascript://" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg> Invite People</a>
                    <a href="javascript://" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 17H2a3 3 0 0 0 3-3V9a7 7 0 0 1 14 0v5a3 3 0 0 0 3 3zm-8.27 4a2 2 0 0 1-3.46 0"></path></svg> Notification Settings</a>
                    <a href="javascript://" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg> Privacy Settings</a>
                    <a href="javascript://" class="dropdown-item"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg> Hide Muted Chans</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg> Create Chan</a>
                    <a class="dropdown-item text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line></svg> Chan Settings</a>
                    <a class="dropdown-item text-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg> Edit Chan Details</a>
                </div><!-- dropdown-menu -->
            </div><!-- chat-sidebar-header -->

            <!-- start sidebar body -->
            <div class="chat-sidebar-body ps ps--active-y">
                <div class="flex-fill pd-y-20 pd-x-10">
                    <div class="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                        <span class="chan-heading">Matrix Chans</span>

                        <a href="javascript://" class="chat-btn-add mr-2" data-toggle="modal">
                            <span data-toggle="tooltip" title="" data-original-title="Create Chan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <nav id="matrixChans" class="nav flex-column nav-chat mg-b-20">
                        <a href="javascript://general" class="nav-link" @click="loadMatrix('lobby')"># lobby</a>
                        <a href="javascript://products" class="nav-link" @click="loadMatrix('misc')"># misc</a>
                    </nav>
                </div>

                <div class="divider"></div>

                <div class="flex-fill pd-y-20 pd-x-10">
                    <div class="d-flex align-items-center justify-content-between pd-x-10 mg-b-10">
                        <span class="chan-heading">P2P Chans</span>

                        <a href="javascript://" class="chat-btn-add mr-2" data-toggle="modal">
                            <span data-toggle="tooltip" title="" data-original-title="Create Chan">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </span>
                        </a>
                    </div>

                    <nav id="peerChans" class="nav flex-column nav-chat mg-b-20">
                        <a href="javascript://general" class="nav-link" @click="loadPeer('lobby')"># lobby <span class="badge badge-danger">2</span></a>
                    </nav>
                </div>

                <div class="divider"></div>

                <div class="flex-fill pd-y-20 pd-x-10 bd-t">
                    <p class="chan-heading">Direct Messages</p>

                    <div id="chatDirectMsg" class="chat-msg-list">
                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/pI7Mxug.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <span class="badge badge-danger float-right mt-3">3</span>
                            <div class="nickname">situmay</div>
                            <div class="lastSeen">1 hour ago</div>
                        </b-media>

                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/Qg5WW6Q.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <div class="nickname">acantones</div>
                            <div class="lastSeen">2 hours ago</div>
                        </b-media>

                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/262FP2N.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <div class="nickname">rlabares</div>
                            <div class="lastSeen">2 hours ago</div>
                        </b-media>

                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/1k5A3bj.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <div class="nickname">h.owen</div>
                            <div class="lastSeen">3 hours ago</div>
                        </b-media>

                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/yZfoBOs.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <div class="nickname">m.audrey</div>
                            <div class="lastSeen">4 hours ago</div>
                        </b-media>

                        <b-media class="clickable">
                            <template v-slot:aside>
                                <b-img src="https://i.imgur.com/pI7Mxug.jpg" rounded="circle" width="40" alt="Avatar Image" />
                            </template>

                            <div class="nickname">e.ocaba</div>
                            <div class="lastSeen">4 hours ago</div>
                        </b-media>
                    </div>
                </div>

                <div class="ps__rail-x" style="left: 0px; top: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; height: 484px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 307px;"></div>
                </div>
            </div><!-- chat-sidebar-body -->

            <div class="chat-sidebar-footer">
                <div class="d-flex align-items-center">
                    <b-img class="userAvatar" src="img/dark-hood-icon.jpg" rounded="circle" width="40" alt="Avatar Image" />
                    <!-- <b-img class="userAvatar" src="https://i.imgur.com/gZAXr19.png" rounded="circle" width="40" alt="Avatar Image" /> -->
                    <h6 class="userNickname">s.nakamoto</h6>
                </div>
                <div class="d-flex align-items-center">
                    <!-- microphone -->
                    <a href="javascript://">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
                            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                            <line x1="12" y1="19" x2="12" y2="23"></line>
                            <line x1="8" y1="23" x2="16" y2="23"></line>
                        </svg>
                    </a>

                    <!-- settings -->
                    <a href="javascript://">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                    </a>
                </div>
            </div><!-- chat-sidebar-footer -->
        </div><!-- chat-sidebar -->

        <!-- start chat content -->
        <div class="chat-content">
            <div class="chat-content-header">
                <h6 id="chanTitle" class="mg-b-0">#general</h6>
                <div id="directTitle" class="d-none">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">b</span></div>
                        <h6 class="mg-l-10 mg-b-0">@dfbot</h6>
                    </div>
                </div>
                <div class="d-flex">
                    <nav id="chanNav">
                        <a href="javascript://modalInvitePeople" data-toggle="modal"><span data-toggle="tooltip" title="" data-original-title="Invite People"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line></svg></span></a>
                        <a id="showMemberList" href="javascript://" data-toggle="tooltip" title="" class="d-flex align-items-center active" data-original-title="Member list">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            <span class="tx-medium mg-l-5">25</span>
                        </a>
                    </nav>

                    <nav id="directNav" class="d-none">
                        <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Call User"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
                        <a href="javascript://" data-toggle="tooltip" title="" data-original-title="User Details"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line></svg></a>
                        <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Add to Favorites"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></a>
                        <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Flag User"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg></a>
                    </nav>

                    <div class="search-form mg-l-15 d-none d-sm-flex">
                        <input type="search" class="form-control" placeholder="Search">
                        <button class="btn" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                    </div>

                    <nav class="mg-sm-l-10">
                        <a href="javascript://" data-toggle="tooltip" title="" data-placement="left" data-original-title="Chan Settings"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg></a>
                    </nav>
                </div>
            </div><!-- chat-content-header -->

            <!-- start chat content body -->
            <div class="chat-content-body ps ps--active-y">
                <div class="chat-group">
                    <div class="chat-group-divider">February 20, 2019</div>

                    <div class="media">
                        <div class="avatar avatar-offline"><img src="img/dark-hood-icon.jpg" class="rounded-circle" alt=""></div>
                        <div class="media-body">
                            <h6>s.nakamoto <small>Today at 1:30am</small></h6>
                            <p>Hello everyone, this is my first message to this chan</p>
                            <p>anybody here?</p>
                        </div>
                </div>

                <div class="chat-group-divider">February 21, 2019</div>
                    <div class="media">
                        <div class="avatar avatar-offline"><img src="img/dark-hood-icon.jpg" class="rounded-circle" alt=""></div>
                        <div class="media-body">
                            <h6>s.nakamoto <small>Yesterday at 4:10am</small></h6>
                            <p>I'm back once again!!</p>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        </div><!-- media-body -->
                    </div><!-- media -->

                    <div class="media">
                        <div class="avatar avatar-online"><img src="https://i.imgur.com/pI7Mxug.jpg" class="rounded-circle" alt=""></div>
                        <div class="media-body">
                            <h6>situmay <small>Yesterday at 4:15am</small></h6>
                            <p>Excepteur sint occaecat cupidatat non proident</p>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse...</p>
                        </div><!-- media-body -->
                    </div><!-- media -->

                    <div class="chat-group-divider">February 22, 2019</div>

                    <div class="media">
                        <div class="avatar avatar-offline"><img src="https://i.imgur.com/Qg5WW6Q.jpg" class="rounded-circle" alt=""></div>
                        <div class="media-body">
                            <h6>rlabares <small>Today at 9:40am</small></h6>
                            <p>Nam libero tempore, cum soluta nobis</p>
                        </div>
                    </div>

                    <div class="media">
                        <div class="avatar avatar-offline"><img src="img/dark-hood-icon.jpg" class="rounded-circle" alt=""></div>
                        <div class="media-body">
                            <h6>s.nakamoto <small>Today at 10:05am</small></h6>
                            <p>I'm back once again!!</p>
                            <p>Et harum quidem rerum facilis est et expedita distinctio.</p>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                        </div>
                    </div>

                </div>

                <div class="ps__rail-x" style="left: 0px; top: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; height: 484px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 371px;"></div>
                </div>
            </div><!-- chat-content-body -->

            <div class="chat-sidebar-right ps">
                <div class="pd-y-20 pd-x-10">
                    <div class="tx-10 tx-uppercase tx-medium tx-color-03 tx-sans tx-spacing-1 pd-l-10">Members List</div>

                    <div class="chat-member-list">
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">b</span></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">dfbot</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><img src="https://i.imgur.com/262FP2N.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">situmay</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-offline"><img src="https://i.imgur.com/1k5A3bj.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">acantones</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-offline"><img src="https://i.imgur.com/yZfoBOs.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">rlabares</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><img src="https://i.imgur.com/pI7Mxug.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">h.owen</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-xs avatar-online"><span class="avatar-initial rounded-circle">k</span></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">k.billie</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><img src="https://i.imgur.com/Qg5WW6Q.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">m.audrey</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">m</span></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">macasindil</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><img src="https://i.imgur.com/262FP2N.jpg" class="rounded-circle" alt=""></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">e.ocaba</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                        <a href="javascript://" class="media">
                            <div class="avatar avatar-sm avatar-online"><span class="avatar-initial rounded-circle">k</span></div>
                            <div class="media-body mg-l-10">
                                <h6 class="mg-b-0">avendula</h6>
                            </div><!-- media-body -->
                        </a><!-- media -->
                    </div><!-- chat-msg-list -->
                </div>

                <div class="ps__rail-x" style="left: 0px; top: 0px;">
                    <div class="ps__thumb-x" tabindex="0" style="left: 0px; width: 0px;"></div>
                </div>
                <div class="ps__rail-y" style="top: 0px; right: 0px;">
                    <div class="ps__thumb-y" tabindex="0" style="top: 0px; height: 0px;"></div>
                </div>
            </div><!-- chat-sidebar-right -->

            <div class="chat-content-footer">
                <a href="javascript://" data-toggle="tooltip" title="" class="chat-plus" data-original-title="Add File"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></a>
                <input type="text" class="form-control align-self-center bd-0" placeholder="Message">

                <nav>
                    <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Add GIF"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></a>
                    <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Add Gift"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg></a>
                    <a href="javascript://" data-toggle="tooltip" title="" data-original-title="Add Smiley"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg></a>
                </nav>
            </div><!-- chat-content-footer -->
        </div><!-- chat-content -->
    </div><!-- chat-wrapper -->
</template>

<!-- <script src="https://cloudflare-ipfs.com/ipfs/QmXvTsM8z5cLH1oqXkXjqYB6Vn4n2PDs3NDduwvjaJfqXX/js/jquery.min.js"></script> -->
<!-- <script src="https://cloudflare-ipfs.com/ipfs/QmXvTsM8z5cLH1oqXkXjqYB6Vn4n2PDs3NDduwvjaJfqXX/js/bootstrap.bundle.min.js"></script> -->
<!-- <script src="https://cloudflare-ipfs.com/ipfs/QmXvTsM8z5cLH1oqXkXjqYB6Vn4n2PDs3NDduwvjaJfqXX/js/perfect-scrollbar.min.js"></script> -->
<!-- <script src="https://cloudflare-ipfs.com/ipfs/QmXvTsM8z5cLH1oqXkXjqYB6Vn4n2PDs3NDduwvjaJfqXX/js/dashforge.chat.js"></script> -->

<script>
/* Import libraries. */
// import JQuery from 'jquery'

/* Import views. */
const UnderConstruction = () => import('@/views/UnderConstruction')

// const $ = JQuery

// require('@/assets/css/dashforge.css')
require('@/assets/css/dashforge.chat.css')

export default {
    components: {
        UnderConstruction,
    },
    data: () => {
        return {
            //
        }
    },
    methods: {
        closeNotice () {
            /* Go back in history ONE stop. */
            this.$router.go(-1)
        },
        init () {
            // $('[data-toggle="tooltip"]').tooltip()

            // chat sidebar body scrollbar
            new PerfectScrollbar('.chat-sidebar-body', {
                suppressScrollX: true
            });

            // chat content body scrollbar
            new PerfectScrollbar('.chat-content-body', {
                suppressScrollX: true
            });

            // chat sidebar right scrollbar
            new PerfectScrollbar('.chat-sidebar-right', {
                suppressScrollX: true
            });

            ///// UI INTERACTION /////

            // direct message click
            $('#chatDirectMsg .media').on('click', function(e) {
                e.preventDefault();

                $(this).addClass('active');
                $(this).siblings().removeClass('active');

                $('#allChans .active').removeClass('active');

                var directUser = $(this).find('.nickname').text();
                // var directUser = $(this).find('h6').text();
                $('#directTitle h6').text('@'+directUser);

                var avatar = $(this).find('.avatar');
                $('#directTitle .avatar').replaceWith(avatar.clone());

                // view direct title
                $('#chanTitle').addClass('d-none');
                $('#directTitle').removeClass('d-none');

                // view direct nav icon
                $('#chanNav').addClass('d-none');
                $('#directNav').removeClass('d-none');

                if(window.matchMedia('(max-width: 991px)').matches) {
                    showChatContent();
                }

                $('body').removeClass('show-sidebar-right');
                $('#showMemberList').removeClass('active');
            })

            function showChatContent() {
                $('#mainMenuOpen').addClass('d-none');
                $('#chatContentClose').removeClass('d-none');

                $('body').addClass('chat-content-show');
            }

            function hideChatContent() {
                $('#chatContentClose').addClass('d-none');
                $('#mainMenuOpen').removeClass('d-none');

                $('body').removeClass('chat-content-show');
            }

            $('#showMemberList').on('click', function(e){
                e.preventDefault()
                $(this).toggleClass('active');
                $('body').toggleClass('show-sidebar-right');
            })

            $('#chatContentClose').on('click', function(e){
                e.preventDefault()
                hideChatContent();
            })

            // making sure navleft and sidebar are display when resizing to desktop
            $(window).resize(function(){
                if(window.matchMedia('(min-width: 992px)').matches) {
                    $('.chat-navleft').removeClass('d-none');
                    $('.chat-sidebar').removeClass('d-none');
                }
            })
        },
        loadChan (_chan) {
            // e.preventDefault()

            $(this).addClass('active');
            $(this).siblings().removeClass('active');

            $('#chatDirectMsg .active').removeClass('active');

            // FIXME: Use Vuejs reactivity.
            $('#chanTitle').text(`# ${_chan}`);

            // view chan title
            $('#chanTitle').removeClass('d-none');
            $('#directTitle').addClass('d-none');

            // view chan nav icon
            $('#chanNav').removeClass('d-none');
            $('#directNav').addClass('d-none');

            if (window.matchMedia('(max-width: 991px)').matches) {
                showChatContent();
            }
        },
        loadMatrix (_chan) {
            this.loadChan(_chan)
        },
        loadPeer (_chan) {
            this.loadChan(_chan)
        },

    },
    mounted: function () {
        /* Display the un-dismissable modal. */
        // this.$bvModal.show('modal-under-construction')

        this.init()
    },
}
</script>

<style scoped>
.nickname {
    font-size: 1.2em;
    font-weight: bold;
}

.lastSeen {
    font-size: 0.8em;
    color: rgba(30, 30, 30, 0.8);
    text-decoration: none;
}

.chan-heading {
    font-size: 1.4em;
    font-weight: bold;
    color: rgba(30, 30, 30, 0.8);
    margin-left: 5px;
}

.nav-link {
    padding: 10px;
    font-weight: bold;
}

.userAvatar {
    margin: 0px;
}
.userNickname {
    font-size: 1.2em;
    font-weight: bold;
    margin-left: 15px;
}
</style>
